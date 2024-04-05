import {
  useVideoConfig, Sequence
} from "remotion";
import React from "react";
class SubtitleSequence {
  constructor(text) {
    this.text = text;
  }
  seperator = ",";
  timestampToSeconds(srtTimestamp) {
    const [rest, millisecondsString] = srtTimestamp.split(",");
    const milliseconds = parseInt(millisecondsString);
    const [hours, minutes, seconds] = rest.split(":").map((x) => parseInt(x));
    const result = milliseconds * 0.001 + seconds + 60 * minutes + 3600 * hours;

    return Math.round(result * 1000) / 1000;
  }
  ;
  correctFormat(time) {
    let str = time.replace(".", ",");
    var hour = null;
    var minute = null;
    var second = null;
    var millisecond = null;
    // Handle millisecond
    var [front, ms] = str.split(",");
    millisecond = this.fixed_str_digit(3, ms);
    // Handle hour
    var [a_hour, a_minute, a_second] = front.split(":");
    hour = this.fixed_str_digit(2, a_hour, false);
    minute = this.fixed_str_digit(2, a_minute, false);
    second = this.fixed_str_digit(2, a_second, false);
    return `${hour}:${minute}:${second},${millisecond}`;
  }

  fixed_str_digit(how_many_digit, str, padEnd = true) {
    if (str.length == how_many_digit) {
      return str;
    }
    if (str.length > how_many_digit) {
      return str.slice(0, how_many_digit);
    }
    if (str.length < how_many_digit) {
      if (padEnd) {
        return str.padEnd(how_many_digit, "0");
      }
      else {
        return str.padStart(how_many_digit, "0");
      }
    }
  }
  commaParser(data) {
    data = data.replace(/\r/g, "");
    var regex = /(\d+)\n(\d{1,2}:\d{2}:\d{2},\d{1,3}) --> (\d{1,2}:\d{2}:\d{2},\d{1,3})/g;
    let data_array = data.split(regex);
    data_array.shift(); // remove first '' in array
    return data_array;
  }
  dotParser(data) {
    data = data.replace(/\r/g, "");
    var regex = /(\d+)\n(\d{1,2}:\d{2}:\d{2}\.\d{1,3}) --> (\d{1,2}:\d{2}:\d{2}\.\d{1,3})/g;
    let data_array = data.split(regex);
    data_array.shift();
    this.seperator = ".";
    return data_array;
  }
  fromSrt(data) {
    var originalData = data;
    var data_array = this.commaParser(originalData);
    if (data_array.length == 0) {
      data_array = this.dotParser(originalData);
    }
    var items = [];
    for (var i = 0; i < data_array.length; i += 4) {
      const startTime = this.correctFormat(data_array[i + 1].trim());
      const endTime = this.correctFormat(data_array[i + 2].trim());
      var new_line = {
        id: data_array[i].trim(),
        startTime,
        startSeconds: this.timestampToSeconds(startTime),
        endTime,
        endSeconds: this.timestampToSeconds(endTime),
        text: data_array[i + 3].trim(),
      };
      items.push(new_line);
    }
    return items;
  }
  toSrt(data) {
    var res = "";
    const end_of_line = "\r\n";
    for (var i = 0; i < data.length; i++) {
      var s = data[i];
      res += s.id + end_of_line;
      res += s.startTime + " --> " + s.endTime + end_of_line;
      res += s.text.replace("\n", end_of_line) + end_of_line + end_of_line;
    }
    return res;
  }
  getSequences(customComponent = null) {
    let subtitleData = this.getArray();
    return subtitleData.map((item, i) => {
      return (
        <Sequence key={i}
          durationInFrames={item.endFrame - item.startFrame}
          from={item.startFrame}
        >
          {customComponent
            ? React.isValidElement(customComponent)
              ? React.createElement(customComponent.type, { ...customComponent.props, text: item.text }, customComponent.props.children)
              : <h1>{item.text}</h1>
            : <h1>{item.text}</h1>}
        </Sequence>
      );
    })
  }
  getArray() {
    const { fps } = useVideoConfig();
    let subtitleData = this.fromSrt(this.text).map((item) => {
      return {
        text: item.text,
        startFrame: item.startSeconds * fps,
        endFrame: item.endSeconds * fps,
      };
    });
    return subtitleData
  }
}

export default SubtitleSequence;
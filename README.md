## Remotion Subtitle Library

Remotion Subtitles is a JavaScript library designed to simplify the process of adding animated subtitles or captions to your Remotion video projects. It offers easy parsing of SRT files and provides various pre-built caption templates with stunning animation effects.The library automatically handles SRT files using either comma (,) or dot (.) as the decimal separator.

## Installation

```bash
npm install remotion-subtitle
```

## Usage

Import the Library, other Captions if need, and React Hooks.

```javascript
import { SubtitleSequence } from "remotion-subtitle";
import { TypewriterCaption as Caption } from "remotion-subtitle";
import { useEffect, useState } from "react";
```

Sample Usage

```javascript
export const Subtitles = () => {
  const { fps } = useVideoConfig();
  let [Sequences, setSequences] = useState([]);
  const [loaded, setLoaded] = useState(false);
  let subtitles = new SubtitleSequence("audio.srt"); // Your srt filename from public folder.
  useEffect(() => {
    subtitles.ready().then(() => {
      setSequences(subtitles.getSequences(<Caption />, fps));
      setLoaded(true);
    });
  }, []);
  return (
    <>
      {loaded && (
        <>
          <Audio src={staticFile("ibrahim.mp3")} /> {Sequences}
        </>
      )}
    </>
  );
};
```

You can pass your custom Caption Component (should accept a prop named **text** ) inside getSequences function. If not, default h1 element will be used.

```javascript
useEffect(() => {
  subtitles.ready().then(() => {
    setSequences(subtitles.getSequences(<YourAwesomeCaption />, 30));
    setLoaded(true);
  });
}, []);
```

This library includes, **17 hand-made** styled Components for you to use.

You can import them from **"remotion-subtitle"** to use, if you want to pass custom style, go ahead.

**style** prop: Apply custom styles to your captions (e.g., color, font size)

```javascript
subtitles.getSequences(<Caption style={{ fontSize: "24px" }} />);
```

Available Caption Templates

- BounceCaption  
  ![BounceCaption](https://github.com/ahgsql/remotion-subtitles/blob/main/readme_files/BounceCaption.gif)

- ColorfulCaption  
  ![ColorfulCaption](https://github.com/ahgsql/remotion-subtitles/blob/main/readme_files/ColorfulCaption.gif)

- ExplosiveCaption  
  ![ExplosiveCaption](https://github.com/ahgsql/remotion-subtitles/blob/main/readme_files/ExplosiveCaption.gif)

- FadeCaption  
  ![FadeCaption](https://github.com/ahgsql/remotion-subtitles/blob/main/readme_files/FadeCaption.gif)

- FireCaption  
  ![FireCaption](https://github.com/ahgsql/remotion-subtitles/blob/main/readme_files/FireCaption.gif)

- GlitchCaption  
  ![GlitchCaption](https://github.com/ahgsql/remotion-subtitles/blob/main/readme_files/GlitchCaption.gif)

- GlowingCaption  
  ![GlowingCaption](https://github.com/ahgsql/remotion-subtitles/blob/main/readme_files/GlowingCaption.gif)

- LightningCaption  
  ![LightningCaption](https://github.com/ahgsql/remotion-subtitles/blob/main/readme_files/LightningCaption.gif)

- NeonCaption  
  ![NeonCaption](https://github.com/ahgsql/remotion-subtitles/blob/main/readme_files/NeonCaption.gif)

- RotatingCaption  
  ![RotatingCaption](https://github.com/ahgsql/remotion-subtitles/blob/main/readme_files/RotatingCaption.gif)

- ShakeCaption  
  ![ShakeCaption](https://github.com/ahgsql/remotion-subtitles/blob/main/readme_files/ShakeCaption.gif)

- ThreeDishCaption  
  ![ThreeDishCaption](https://github.com/ahgsql/remotion-subtitles/blob/main/readme_files/ThreeDishCaption.gif)

- TiltShiftCaption  
  ![TiltShiftCaption](https://github.com/ahgsql/remotion-subtitles/blob/main/readme_files/TiltShiftCaption.gif)

- TypewriterCaption  
  ![TypewriterCaption](https://github.com/ahgsql/remotion-subtitles/blob/main/readme_files/TypewriterCaption.gif)

- WavingCaption  
  ![WavingCaption](https://github.com/ahgsql/remotion-subtitles/blob/main/readme_files/WavingCaption.gif)

- ZoomCaption  
  ![ZoomCaption](https://github.com/ahgsql/remotion-subtitles/blob/main/readme_files/ZoomCaption.gif)

## Documentation

### SubtitleSequence Class

**constructor(filepath):** Initializes the Sequence with SRT file path.

**getSequences(customComponent,fps=30):** Generates Remotion Sequence components with captions with desired fps.
Returns Sequences with auto applied timings.

**ready** Returns a promise, to load .srt file from public/ folder.

**getArray(fps):** Returns the parsed subtitle data as an array. So you can use them as you wish.

each item has **text**, **startFrame** and **endFrame** properties.

### Caption Templates

Each template is a React component with pre-defined animation styles. You can customize the appearance further using the style prop.

## Contribution

We welcome contributions to expand the library's functionality and caption options. Here's how you can get involved:

- **Create new caption templates:** Design and implement React components with unique animation effects.

```
1. Fork this project.
2. Create .js file inside captions folder which exports a component  which accepts text and style props. This style should be combined with your styling. See premade Captions for reference.
3. export {YourComponent} from ./YourComponent inside captions/index.js file.
```

- **Improve existing templates:** Enhance the styling, animation, or performance of current captions.

- **Add features:** Contribute new features like easing options, delay support, or iteration control for animations.

- **Fix bugs and improve documentation:** Help ensure the library is robust and easy to use.

## Enjoy creating captivating videos with animated subtitles using Remotion Subtitles!

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/ahgsql)

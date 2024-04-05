## Remotion Subtitle Library

  
Remotion Subtitles is a JavaScript library designed to simplify the process of adding animated subtitles or captions to your Remotion video projects. It offers easy parsing of SRT files and provides various pre-built caption templates with stunning animation effects.The library automatically handles SRT files using either comma (,) or dot (.) as the decimal separator.  

  

## Installation

```bash
npm install remotion-subtitle  
```

## Usage  

Import the Library and Caption Template:  

```javascript
import { SubtitleSequence } from "remotion-subtitles";  

```

Create a SubtitleSequence Instance:  

```javascript
const srt = `... your SRT data ...`; // Replace with your actual SRT content  
let subtitles = new SubtitleSequence(srt);  
```

Generate Sequences with Captions:  

```javascript
export const MyVideo = () => {  
 return (  
   <>  
     {... your other Remotion components ...}  
     {subtitles.getSequences()}  
   </>  
 );  
};  
```
You can pass your custom Caption Component (should accept a prop named **text** )  inside getSequences function. If not, default h1 element will be used.

```javascript
export const MyVideo = () => {  
 return (  
   <>  
    //your other Remotion components
	{subtitles.getSequences(<Caption/>)}  
   </>  
 );  
};  
```
This library includes, **17 hand-made** styled Components for you to use. 

You can import them from **"remotion-subtitles/captions"** to use, if you want to pass custom style, go ahead.


**style** prop: Apply custom styles to your captions (e.g., color, font size)  
```javascript
subtitles.getSequences(<Caption style={{ fontSize: "24px" }} />)
```

Available Caption Templates  

* BounceCaption  
* ColorfulCaption  
* ExplosiveCaption  
* FadeCaption  
* FireCaption  
* GlitchCaption  
* GlowingCaption  
* LightningCaption  
* NeonCaption  
* RotatingCaption  
* ShakeCaption  
* ThreeDishCaption  
* TiltShiftCaption  
* TypewriterCaption  
* WavingCaption  
* ZoomCaption  

Example  

```javascript
import { SubtitleSequence } from "remotion-subtitles";  
import { FireCaption as Caption } from 'remotion-subtitles/captions';
// Replace 'FireCaption' with your desired caption template  
const srtData = `...`; // Your SRT data as string.
const subtitles = new SubtitleSequence(srtData);

export const MyVideo = () => {  
 return (  
   <>  
     {subtitles.getSequences(<Caption/>)}  
   </>  
 );  
};  
```


## Documentation  

### SubtitleSequence Class

**constructor(text):** Initializes the Sequence with SRT data.  
**getSequences(customComponent):** Generates Remotion Sequence components with captions.  
Returns Sequences with auto applied timings.

**getArray():** Returns the parsed subtitle data as an array. So you can use them as you wish.
each item has **text**, **startFrame** and **endFrame** properties.
      

### Caption Templates

Each template is a React component with pre-defined animation styles. You can customize the appearance further using the style prop.  

## Contribution

We welcome contributions to expand the library's functionality and caption options. Here's how you can get involved:

-   **Create new caption templates:** Design and implement React components with unique animation effects. 

```
1. Fork this project.
2. Create .js file inside captions folder which exports a component  which accepts text and style props. This style should be combined with your styling. See premade Captions for reference.
3. export {YourComponent} from ./YourComponent inside captions/index.js file.
```

-   **Improve existing templates:** Enhance the styling, animation, or performance of current captions.

-   **Add features:** Contribute new features like easing options, delay support, or iteration control for animations.

-   **Fix bugs and improve documentation:** Help ensure the library is robust and easy to use.
   

## Enjoy creating captivating videos with animated subtitles using Remotion Subtitles!
[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/ahgsql)

# Restaurant Voice-Order App

#### aka, _May I Take Your Order_

### A Simple Demo Using AssemblyAI API

View the [live demo here](https://demo.milosd.com).

### Application Data Flow

1. Uses the MediaStream Recording API (available in most modern browsers) with the react-media-recorder package to upload an audiofile to an AssemblyAI API endpoint (/upload).
2. Posts the uploaded audio URL for transcription (/transcript) and checks every 2 seconds for completion.
3. If complete, it receives the transcription text and compares the contents of the transcript with the selected restaurant menu options. It then displays the matching ordered content to the screen. This data could also theoretically be sent to a restaurant to take your order.

It works surprisingly well.

Currently this does not work with multiple quantities (for example, 2 orders of an item) but may possibly implement that in the future.

Step-by-Step Guide to use the code to block Youtube recommendations..

**1. Download the GitHub Repository**
You can download the repository as a ZIP file directly from GitHub:
Go to the GitHub page of your repository:
Click the green Code button.
In the dropdown, select Download ZIP. This will download the entire repository as a ZIP file to your computer.

**2. Unzip the File**
Once the ZIP file is downloaded:
Navigate to your Downloads folder (or wherever the ZIP file was saved).
Right-click the ZIP file (likely named hideYoutubeHomePage-main.zip) and select Extract All (on Windows) or Open with > Archive Utility (on macOS).
Choose the destination where you want to unzip the folder and click Extract.
Now, you should have a folder named hideYoutubeHomePage-main containing the necessary files (manifest.json, content.js, style.css, etc.).

**3. Load the Chrome Extension**
Now you need to load this unzipped folder as an unpacked extension in Chrome:
Open Chrome.
In the address bar, type chrome://extensions/ and press Enter.
Enable Developer mode in the top-right corner of the page.
Click the Load unpacked button in the top-left corner.
A file dialog will appear. Navigate to the unzipped hideYoutubeHomePage-main folder and select it.
Click Select Folder.
The extension should now be loaded, and you’ll see it listed in your Chrome extensions.

**4. Test the Extension on YouTube**
Open a new tab in Chrome and go to YouTube.
The extension should be active, and it will block YouTube recommendations, replacing them with the custom UI overlay.


**Features:**
1. Creating an overlay on the YouTube homepage.
2. Hiding the overlay on a video page (/watch?v=) or the search results page.
3. Observing URL changes to detect when the user navigates away from the homepage to another section of YouTube and remove the overlay.

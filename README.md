# Image Search Engine

## Description
This is a simple image search engine built using HTML, CSS, and JavaScript. The application fetches images from the Unsplash API based on the search query entered by the user. It displays a list of images and allows users to load more results with a "Show More" button.

## Features
- Users can search for images by typing a query in the search box.
- Results are displayed dynamically using JavaScript and the Unsplash API.
- Users can load more results by clicking the "Show More" button.
- Responsive design that adapts to different screen sizes.

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6)
- [Unsplash API](https://unsplash.com/documentation)

## Screenshots
![Screenshot of Image Search Engine](./screenshot.png)

## How to Use
1. Clone the repository to your local machine.
    ```bash
    git clone https://github.com/your-username/image-search-engine.git
    ```
2. Open the `index.html` file in your browser.
3. In the search box, type any keyword (e.g., "nature", "cars", "buildings") and click the "Search" button.
4. The search results will be displayed below the form.
5. To load more images, click the "Show More" button.

## Unsplash API
To use the Unsplash API, you'll need to sign up for an account and get an access key. Follow these steps:
1. Go to [Unsplash API](https://unsplash.com/developers) and sign up or log in.
2. Create a new app to get your **Access Key**.
3. Replace the existing `accessKey` in the JavaScript code with your own:
    ```javascript
    const accesskey = "YOUR_UNSPLASH_ACCESS_KEY";
    ```

## Folder Structure

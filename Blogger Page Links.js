document.addEventListener("DOMContentLoaded", function() {
    // Function to fetch and display related posts
    async function fetchRelatedPosts(label) {
        try {
      const blogUrl = 'https://www.frisqoo.com';
      const maxPosts = 5;
      const url = `${blogUrl}/feeds/posts/summary/-/${label}?alt=json&max-results=${maxPosts}`;
      const response = await fetch(url);
      const data = await response.json();
      const entries = data.feed.entry || [];
      const relatedPostsHtml = entries.map(entry => {
        const title = entry.title.$t;
        const link = entry.link.find(l => l.rel === 'alternate').href;
        return `<p><a href="${link}" target="_blank">${title}</a></p>`;
      }).join('');
      document.getElementById('aRel').innerHTML = relatedPostsHtml;
    } catch (error) {
      console.error('Error fetching related posts:', error);
    }
  }

    // Function to populate text links
    function populateTextLinks() {
        let textLinks = [
            { text: "Visit our blog for more details: ", url: "https://your-blogger-page-url1", linkText: "Blogger Page 1" },
            { text: "Check out our latest post: ", url: "https://your-blogger-page-url2", linkText: "Blogger Page 2" },
            { text: "Read our tutorials: ", url: "https://your-blogger-page-url3", linkText: "Blogger Page 3" }
        ];

        let linksContainer = document.getElementById("text-links");

        textLinks.forEach(linkInfo => {
            let paragraph = document.createElement("p");
            paragraph.style.margin = "0";
            paragraph.style.padding = "0";

            let textNode = document.createTextNode(linkInfo.text);
            paragraph.appendChild(textNode);

            let anchor = document.createElement("a");
            anchor.href = linkInfo.url;
            anchor.className = "extL";
            anchor.textContent = linkInfo.linkText;
            anchor.target = "_blank";
            anchor.style.marginLeft = "5px";

            paragraph.appendChild(anchor);
            linksContainer.appendChild(paragraph);
        });
    }

    // Call functions to initialize
    fetchRelatedPosts("Fuel");
    populateTextLinks();
});

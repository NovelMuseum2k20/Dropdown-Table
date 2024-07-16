document.addEventListener("DOMContentLoaded", function() {
    // Function to fetch and display related posts
    async function fetchRelatedPosts(category) {
        try {
            let url = `https://www.frisqoo.com/feeds/posts/summary/-/${category}?alt=json&max-results=5`;
            let response = await fetch(url);
            let data = await response.json();
            let entries = data.feed.entry || [];
            
            let posts = entries.map((entry, index) => {
                let title = entry.title.$t;
                let link = entry.link.find(link => link.rel === "alternate").href;
                return `<p style="display: flex; align-items: center; margin: 0;"><span>${index + 1}. </span><a href="${link}" target="_blank" style="margin-left: 5px;">${title}</a></p>`;
            }).join("");

            document.getElementById("related-posts").innerHTML = posts;
        } catch (error) {
            console.error("Error fetching related posts:", error);
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

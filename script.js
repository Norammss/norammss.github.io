<script>
 const links = document.querySelectorAll('a[href^="#"]');

        for (const link of links) {
            link.addEventListener('click', clickHandler);
        }

        function clickHandler(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            const offsetTop = document.querySelector(href).offsetTop;

            scroll({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
   
   
   const dynamicHeading = document.getElementById('dynamicHeading');

// Function to update the dynamic content
function updateDynamicContent() {
  // Retrieve the data from an API or any other data source
  const dynamicData = "Over the river and through the woods...";

  // Update the content with the dynamic data
  dynamicHeading.textContent = dynamicData;
}

// Call the function to update the dynamic content
updateDynamicContent();

   </script>
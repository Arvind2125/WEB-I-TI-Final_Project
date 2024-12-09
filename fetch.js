const postCard = document.getElementById('postCard');
      const loadingSpinner = document.getElementById('loadingSpinner');
      const postIdElement = document.getElementById('postId');
      const postTitleElement = document.getElementById('postTitle');
      const postBodyElement = document.getElementById('postBody');

      async function fetchPostData() {
          try {
              // Show loading spinner
              loadingSpinner.classList.remove('hidden');
              postCard.classList.add('hidden');

              // Fetch post data
              const response = await fetch('https://jsonplaceholder.typicode.com/posts/40');
              
              // Check if response is successful
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }

              // Parse JSON data
              const post = await response.json();

              // Populate card with post data
              postIdElement.textContent = post.id;
              postTitleElement.textContent = post.title;
              postBodyElement.textContent = post.body;

              // Hide loading spinner and show card
              loadingSpinner.classList.add('hidden');
              postCard.classList.remove('hidden');

          } catch (error) {
              // Handle any errors
              console.error('Error fetching post:', error);
              loadingSpinner.textContent = 'Error loading post';
          }
      }

      // Fetch post data when page loads
      fetchPostData();
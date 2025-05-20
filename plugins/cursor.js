export default defineNuxtPlugin(() => {
    if (process.client) {
        const cursor = document.createElement('div');
        cursor.classList.add('cursor');
        document.body.appendChild(cursor);
      
        document.addEventListener('mousemove', (e) => {
          cursor.style.left = `${e.pageX}px`;
          cursor.style.top = `${e.pageY}px`;
        });

        document.addEventListener("mouseout", (e) => {
            cursor.style.top = `-100px`;
            cursor.style.left = `-100px`;
        })
      }
      
})

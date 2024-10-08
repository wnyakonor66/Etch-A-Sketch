document.addEventListener("DOMContentLoaded", function(){
    const container = document.createElement('div');
    container.classList.add("container");
    document.body.appendChild(container);
    const reset_btn = document.querySelector('.reset_btn');

    createGrid(16);
    function createGrid(squarePerSide){
        container.innerHTML = '';
        const squareSize = 960 / squarePerSide;

        for(let i=0; i< squarePerSide * squarePerSide;i++){
                const square = document.createElement('div');
                square.classList.add('square');
                square.style.width = `${squareSize}px`;
                square.style.height = `${squareSize}px`;

                square.addEventListener('mouseover', function(){
                    square.style.backgroundColor = "lightgreen";
                });
                container.appendChild(square);

        }
    }
    
    
        
        reset_btn.addEventListener('click', function(){
            let userInput = prompt("Enter the number of squares per side (max: 100):", 16);
            userInput = parseInt(userInput);

            if (userInput > 0 && userInput <= 100){
                createGrid(userInput);
            }else {
                alert("Please enter a valid number between 1 and 100.")
            }


        })

        

})
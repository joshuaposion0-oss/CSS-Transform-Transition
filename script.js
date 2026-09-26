   function setTransform(type) {
            const afterBox = document.getElementById("after");

            
            afterBox.classList.remove("translate", "rotate", "scale", "skew");

            
            afterBox.classList.add(type);

            
            document.querySelector("h1").textContent = "TRANSFORM : " + type.toUpperCase();
        }

        
        setTransform('translate');

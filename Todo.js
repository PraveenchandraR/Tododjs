     

let currentPlaceCard;

const main = document.getElementById("main")


      function openCard() {
          const popupCard = document.getElementById("popupCard");
          main.style.display = "none";
        popupCard.style.display = "block";
      }

      function closeCard() {
        const popupCard = document.getElementById("popupCard");
        popupCard.style.display = "none";
      }
//----Adding Place Card-----------------------------------------------------
      function addPlace() {
        const placeName = document.getElementById("placeName").value;
        if (placeName.trim() !== "") {
          const todoContainer = document.getElementById("todoContainer");

          const placeCard = document.createElement("div");//-------creating placecard---------
            placeCard.classList.add("place-card");
            
            

          const placeContainer = document.createElement("div");
          placeContainer.style.display = "flex";
          placeContainer.style.flexDirection = "column";

          const placeNameHeader = document.createElement("h3");//--placecard name------------
            placeNameHeader.innerText = placeName ;
            const line = document.createElement("hr");
           

          placeContainer.appendChild(placeNameHeader);
          
          const itemList = document.createElement("ol");//-adding ordered list in the card--------------
          placeContainer.appendChild(itemList);
          placeCard.appendChild(placeContainer);

          const addListButton = document.createElement("button");//------------add list button-----------------------
          addListButton.innerText = "Add List";
          addListButton.classList.add("add-list-button");
          addListButton.onclick = function () {
            openListCard(placeCard);
          };
          placeCard.appendChild(addListButton);
//-----deleting whole card from the page-----------------------------------------
          const deleteCardButton = document.createElement("button");
          deleteCardButton.innerText = "Delete Card";
          deleteCardButton.classList.add("delete-card-button");
          deleteCardButton.onclick = function () {
            todoContainer.removeChild(placeCard);
          };
          placeCard.appendChild(deleteCardButton);

          todoContainer.appendChild(placeCard);

          closeCard();
        }
      }

      function openListCard(placeCard) {
        const addListCard = document.getElementById("addListCard");
        addListCard.style.display = "block";
        currentPlaceCard = placeCard;
      }
//----close popup card-------------------------------
      function closeListCard() {
        const addListCard = document.getElementById("addListCard");
        addListCard.style.display = "none";
      }
//-------adding list items in the place card---------------------------
      function addItemToList() {
        const itemName = document.getElementById("itemName").value;
        if (itemName.trim() !== "") {
          const listItem = document.createElement("li");
          listItem.innerText = itemName;
//----------add done mark--------------------------------------------
          const markButton = document.createElement("button");
          markButton.innerText = "Mark";
          markButton.classList.add("mark-button");
          markButton.onclick = function () {
            listItem.classList.toggle("marked");
          };
          listItem.appendChild(markButton);

          const itemList = currentPlaceCard.querySelector("ol");
          itemList.appendChild(listItem);
        }
        closeListCard();
      }
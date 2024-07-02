document.addEventListener("DOMContentLoaded", function() {
    const cards = [
      { id: 1, icon: "fas fa-bus-alt", title: "Bus", text: "A bus." },
      { id: 2, icon: "fas fa-plane", title: "Plane", text: "A bus that flies." },
      { id: 3, icon: "fas fa-taxi", title: "Taxi", text: "A small bus that costs more than a bus." },
      { id: 4, icon: "fas fa-train", title: "Train", text: "A bunch of buses tied together." },
      { id: 5, icon: "fas fa-bicycle", title: "Bicycle", text: "The smallest of buses with two wheels." }
    ];

    let selectedCard = null;

    function selectCard(id) {
      if (selectedCard && selectedCard.id === id) {
        selectedCard = null;
      } else {
        selectedCard = cards.find(card => card.id === id);
      }
      renderCards();
    }

    function renderCards() {
      const cardsContainer = document.getElementById("cards");
      cardsContainer.innerHTML = '';

      cards.forEach((card, index) => {
        const isSelected = selectedCard && selectedCard.id === card.id;

        const cardWrapper = document.createElement("div");
        cardWrapper.className = `card-wrapper ${isSelected ? 'selected' : ''}`;
        cardWrapper.style.left = isSelected ? '50%' : `calc(${index * 20}% - ${index * 20}px)`;
        cardWrapper.style.zIndex = isSelected ? '10' : index;

        cardWrapper.addEventListener("click", () => selectCard(card.id));

        const cardDiv = document.createElement("div");
        cardDiv.className = `card ${isSelected ? 'selected' : ''}`;

        const iconDiv = document.createElement("div");
        iconDiv.className = "icon";
        const iconElement = document.createElement("i");
        iconElement.className = card.icon;
        iconDiv.appendChild(iconElement);

        const contentDiv = document.createElement("div");
        contentDiv.className = "content";
        if (isSelected) {
          const titleDiv = document.createElement("div");
          titleDiv.className = "title";
          const titleHeading = document.createElement("h1");
          titleHeading.textContent = card.title;
          titleDiv.appendChild(titleHeading);

          const textDiv = document.createElement("div");
          textDiv.className = "text";
          const textParagraph = document.createElement("p");
          textParagraph.textContent = card.text;
          textDiv.appendChild(textParagraph);

          const closeButton = document.createElement("button");
          closeButton.type = "button";
          closeButton.className = "close-button";
          closeButton.innerHTML = '<i class="fas fa-times"></i>';
          closeButton.addEventListener("click", (event) => {
            event.stopPropagation();
            selectCard(null);
          });

          contentDiv.appendChild(titleDiv);
          contentDiv.appendChild(textDiv);
          contentDiv.appendChild(closeButton);
        }

        cardDiv.appendChild(iconDiv);
        cardDiv.appendChild(contentDiv);
        cardWrapper.appendChild(cardDiv);
        cardsContainer.appendChild(cardWrapper);
      });
    }

    renderCards();
  });


  $("#replay").click(function() {
    var el = $(".text-pop-up-top"),
      newone = el.clone(true);
  
    el.before(newone);
  
    $("." + el.attr("class") + ":last").remove();
  });
  
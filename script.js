// script.js

var Page = 1;

function changeText(addOrTakeAway) {
    var cardText = document.getElementById("cardText");
    var cardTitle = document.getElementById("cardTitle");

    if (addOrTakeAway) {
        Page++;
    } else {
        Page--;
    }

    if (Page < 1) Page = 1;
    if (Page > 8) Page = 8;
    console.log("Page:" + Page);

    circlePage(Page);

    if (Page === 1) {
        cardTitle.innerText = "Introduction";
        cardText.innerText = "The Windrush scandal, which unfolded in the United Kingdom in 2018, exposed a grave injustice perpetrated against the Caribbean immigrants known as the Windrush generation. This aims to delve into the details of the Windrush scandal, shedding light on its origins, the impact it had on affected individuals, and the subsequent efforts made to address this historical injustice.";
    } else if (Page === 2) {
        cardTitle.innerText = "Migration and Contribution";
        cardText.innerText = "The Windrush generation refers to the individuals who migrated to the UK from Caribbean countries between 1948 and 1971. Following World War II, the UK actively recruited workers from its colonies to address labor shortages and help rebuild the country. These Caribbean immigrants, many of whom arrived on the ship HMT Empire Windrush, made significant contributions to British society, working in essential sectors such as healthcare, transportation, and public services.";
    }
    else if (Page === 3) {
        cardTitle.innerText = "The Hostile Environment Policy";
        cardText.innerText = "The Windrush scandal can be traced back to the implementation of the 'hostile environment' policy. Introduced in 2012, this policy aimed to make life increasingly difficult for undocumented immigrants in the UK. It involved stringent immigration checks and the encouragement of various institutions, such as healthcare and education, to report individuals without legal status.";
    }
    else if (Page === 4) {
        cardTitle.innerText = "The Impact on the Windrush Generation";
        cardText.innerText = "As a result of the hostile environment policy, many members of the Windrush generation found themselves facing severe consequences. Despite residing in the UK legally for decades, individuals suddenly encountered difficulties proving their immigration status. They were denied access to essential services, including healthcare, housing, and employment. Some were even wrongfully detained or faced deportation threats, leaving their lives in disarray.";
    }
    else if (Page === 5) {
        cardTitle.innerText = "The Fight for Justice";
        cardText.innerText = "The Windrush scandal gained significant attention in April 2018 when reports emerged of long-term UK residents being threatened with deportation. The public outcry against the treatment of the Windrush generation led to the exposure of the government's failures and the subsequent resignation of Home Secretary Amber Rudd. The scandal prompted an independent review, highlighting the systemic issues within the Home Office and its immigration policies.";
    }
    else if (Page === 6) {
        cardTitle.innerText = "Government Apologies and Compensation";
        cardText.innerText = "In response to the scandal, the UK government apologized to the Windrush generation and established a task force to help affected individuals prove their immigration status and receive support. They also created a compensation scheme to provide financial redress, but its effectiveness and accessibility remain under scrutiny.";
    }
    else if (Page === 7) {
        cardTitle.innerText = "Lessons Learned and Reforms Implemented";
        cardText.innerText = "The Windrush scandal prompted a critical evaluation of the UK's immigration system and the impact of the hostile environment policy. The incident highlighted the need for comprehensive immigration reforms, ensuring fairness, compassion, and respect for the rights of individuals residing in the country. Efforts have been made to review and amend policies, with a focus on preventing similar injustices from occurring in the future.";
    }
    else if (Page === 8) {
        cardTitle.innerText = "Conclusion";
        cardText.innerText = "The Windrush scandal exposed mistreatment and disregard towards the Windrush generation, revealing a dark chapter in British immigration history. This essay has outlined the scandal's origins, impact on individuals, and subsequent efforts to rectify the injustice. It serves as a reminder of the need for fair and compassionate immigration policies that respect the contributions and rights of all residents.";
    }
}

function circlePage(pageNumber) {
    var circles = document.getElementsByClassName("circle");

    for (var i = 0; i < circles.length; i++) {
        if (i === pageNumber - 1) {
            circles[i].classList.add("active");
        } else {
            circles[i].classList.remove("active");
        }
    }
}

window.onload = function() {
    changeText();
  };


  
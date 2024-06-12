function ShowAssignment(title, content) {
    let discussionNode = document.querySelector("#discussion");

    // Split content into paragraphs
    let paragraphs = content.split("\n");
    let formattedContent = paragraphs.map(paragraph => `<p>${paragraph}</p>`).join('');

    // Update discussionNode with formatted content
    discussionNode.innerHTML = `
        <div class="card mt-3">
            <div class="card-body">
                <h4>${title}</h4>
                ${formattedContent}
            </div>
        </div>`;
}

function ShowWeek(_weekNumber, _assignment1, _assignment2) {
  let week = {
    WeekNumber: _weekNumber,
    Assignment1: _assignment1,
    Assignment2: _assignment2,
  };

  let assignment1Node = document.querySelector("#assignment1");
  let assignment2Node = document.querySelector("#assignment2");
  let discussionNode = document.querySelector("#discussion");

  assignment1Node.innerHTML = `<a href="#" onclick="ShowAssignment('Assignment 1', 
        'Hi Corey, \
        You made some great points about how the firearm will be used. Safety is also a huge importance, so you could also consider a strong stock and recoil pad \
        to absorb the recoil keeping it safer for the user and avoiding damage to the gun. \
        All of the factors are indeed necessary to design the stock in order to maximize the comfort and usability of the shooter. \
        After planning for the guns purpose, caliber, and recoil, you must also take into account the users measurements before beginning to design the stock. \
        The reduction in points is due to your citations. If you are using a bibliography you should be citing the specific ideas or the quotes from your \
        resources within your essay. You should include in-text citations within the body of the essay to clearly indicate which information comes from the cited source. \
        If you have questions about this please let me know. \
        Otherwise, you submitted a well-formated and well-written essay. \
        Thanks, \
        Maria \
        Hi Matthew, \
        You made some great points about how the firearm will be used. Safety is also of huge importance, so you could also consider a strong \
        stock and recoil pad to absorb the recoil keeping it safer for the user and avoiding damage to the gun. \
        All of the factors are indeed necessary to design the stock in order to maximize the comfort and usability of the shooter. \
        After planning for the guns purpose, caliber, and recoil, you must also take into account the users measurements before beginning to design the stock. \
        You submitted a well-formated and well-written essay. \
        Thanks, \
        Maria'
        )">${week.Assignment1}</a>`;

  assignment2Node.innerHTML = `<a href="#" onclick="ShowAssignment('Assignment 2', 'This is the content for Assignment 2')">${week.Assignment2}</a>`;
}

function ShowAssignment(title, content) {
    let discussionNode = document.querySelector("#discussion");
    discussionNode.innerHTML = `
        <div class="card mt-3">
            <div class="card-body">
                <h4>${title}</h4>
                <p>${content}</p>
            </div>
        </div>`;
}

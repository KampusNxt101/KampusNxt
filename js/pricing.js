const form = document.getElementById("requirementForm");

const collegeName =
    document.getElementById("collegeName");

const totalStudents =
    document.getElementById("totalStudents");

const participatingStudents =
    document.getElementById("participatingStudents");

const summaryCollege =
    document.getElementById("summaryCollege");

const summaryStudents =
    document.getElementById("summaryStudents");

const summaryProgram =
    document.getElementById("summaryProgram");

const resetButton =
    document.getElementById("resetButton");

const successMessage =
    document.getElementById("successMessage");


// --------------------------------
// UPDATE COLLEGE NAME
// --------------------------------

collegeName.addEventListener("input", function () {

    summaryCollege.textContent =
        this.value || "—";

});


// --------------------------------
// UPDATE STUDENT COUNT
// --------------------------------

function updateStudentSummary() {

    const total =
        totalStudents.value || "—";

    const participating =
        participatingStudents.value || "—";

    if (
        total !== "—" &&
        participating !== "—"
    ) {

        summaryStudents.textContent =
            `${participating} / ${total}`;

    } else {

        summaryStudents.textContent =
            total;
    }

}


totalStudents.addEventListener(
    "input",
    updateStudentSummary
);


participatingStudents.addEventListener(
    "input",
    updateStudentSummary
);


// --------------------------------
// PROGRAM SELECTION
// --------------------------------

const programOptions =
    document.querySelectorAll(
        'input[name="program"]'
    );


programOptions.forEach(function (option) {

    option.addEventListener(
        "change",
        function () {

            summaryProgram.textContent =
                this.value;

        }
    );

});


// --------------------------------
// STUDENT VALIDATION
// --------------------------------

participatingStudents.addEventListener(
    "input",
    function () {

        const total =
            Number(totalStudents.value);

        const participating =
            Number(participatingStudents.value);

        if (
            total > 0 &&
            participating > total
        ) {

            participatingStudents.setCustomValidity(
                "Expected participants cannot be greater than total students."
            );

        } else {

            participatingStudents.setCustomValidity("");

        }

    }
);


// --------------------------------
// FORM SUBMISSION
// --------------------------------

form.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        if (!form.checkValidity()) {

            form.reportValidity();

            return;

        }


        /*
         * At this point you can send the
         * collected information to:
         *
         * Google Sheets
         * Excel
         * Firebase
         * Supabase
         * Your backend API
         */

        const selectedProgram =
            document.querySelector(
                'input[name="program"]:checked'
            );


        const formData = {

            collegeName:
                collegeName.value,

            contactPerson:
                document.getElementById(
                    "contactPerson"
                ).value,

            designation:
                document.getElementById(
                    "designation"
                ).value,

            email:
                document.getElementById(
                    "email"
                ).value,

            phone:
                document.getElementById(
                    "phone"
                ).value,

            program:
                selectedProgram
                    ? selectedProgram.value
                    : "",

            totalStudents:
                totalStudents.value,

            participatingStudents:
                participatingStudents.value,

            batch:
                document.getElementById(
                    "batch"
                ).value,

            branches:
                document.getElementById(
                    "branches"
                ).value,

            startDate:
                document.getElementById(
                    "startDate"
                ).value,

            objective:
                document.getElementById(
                    "priority"
                ).value,

            requirements:
                document.getElementById(
                    "requirements"
                ).value

        };


        console.log(
            "Captured Requirement:",
            formData
        );


        // Hide form

        form.style.display = "none";


        // Show success message

        successMessage.style.display =
            "block";

    }
);


// --------------------------------
// RESET
// --------------------------------

resetButton.addEventListener(
    "click",
    function () {

        form.reset();

        summaryCollege.textContent =
            "—";

        summaryStudents.textContent =
            "—";

        summaryProgram.textContent =
            "Not selected";

    }
);
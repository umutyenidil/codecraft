$(function () {
    const buildTaskItem = ({id, content, completed}) => {
        return `
            <div class="task" id="${id}">
            <input type="text" value="${content}" readonly class="inputTaskItem ${completed ? "finish lthr" : ""}"/>
            <i class="bx bx-trash"></i>
            </div>
        `;
    };

    $("#addBtn").on("click", () => {
        if ($("#inputText").val()) {
            const taskItem = buildTaskItem({
                id: Date.now(),
                content: $("#inputText").val(),
                completed: false,
            });

            $("#taskList").append(taskItem);

            $("#inputText").val("");
        }
    });

    $(document).on("click", ".task", ({currentTarget, target}) => {
        if ($(target).hasClass("bx-trash")) {
            $(currentTarget).remove();
            return;
        }

        if ($(currentTarget).children("input").hasClass("finish lthr")) {
            $(currentTarget).children("input").removeClass("finish lthr");
        } else {
            $(currentTarget).children("input").addClass("finish lthr");
        }
    });
});
require.config({
    paths: {
        vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs"
    }
});

require(["vs/editor/editor.main"], function () {

    const editor = monaco.editor.create(
        document.getElementById("editor"),
        {
            value: `<!DOCTYPE html>
<html>
<head>
<title>Hello</title>
</head>
<body>

<h1>Hello World</h1>

</body>
</html>`,

            language: "html",

            theme: "vs-dark",

            automaticLayout: true,

            wordWrap: "on",

            minimap: {
                enabled: true
            },

            fontSize: 15,

            scrollBeyondLastLine: false
        }
    );

    const languageSelect =
        document.getElementById(
            "languageSelect"
        );

    if (languageSelect) {

        languageSelect.onchange =
        function () {

            let lang =
                languageSelect.value
                    .toLowerCase();

            if (lang === "javascript")
                lang = "javascript";

            monaco.editor.setModelLanguage(
                editor.getModel(),
                lang
            );
        };
    }

    const themeSelect =
        document.getElementById(
            "themeSelect"
        );

    if (themeSelect) {

        themeSelect.onchange =
        function () {

            const value =
                themeSelect.value;

            if (
                value ===
                "VS Code Dark"
            ) {

                monaco.editor.setTheme(
                    "vs-dark"
                );
            }

            if (
                value ===
                "Light"
            ) {

                monaco.editor.setTheme(
                    "vs"
                );
            }
        };
    }

    window.editor = editor;
});

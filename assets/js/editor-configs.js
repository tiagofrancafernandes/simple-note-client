
function isInt(num)
{
    return Number.isInteger(num);
}

function isNumber(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0); }

function editorSetLang(lang_mode)
{
    // Lang list:
    // https://github.com/ajaxorg/ace/tree/master/lib/ace/mode
    var valid_lang = window.editor_langs.indexOf(lang_mode) != -1;
    if (valid_lang)
    {
        window.editor.session.setMode({
            path: "ace/mode/" + lang_mode,
            v: Date.now()
        });
    }
}

function editorUndo()
{
    window.editor.undo();
}

function editorRedo()
{
    window.editor.redo();
}

function resetFontSize()
{
    window.editor.setFontSize(window.default_font_size);
}

function editorSetFontSize(new_font_size)
{
    if (isInt(new_font_size))
    {
        new_font_size = new_font_size <= 0 ? 1 : new_font_size;
        new_font_size = new_font_size >= 70 ? 70 : new_font_size;
        window.editor.setFontSize(new_font_size);
    }
}

function editorIncreaseFontSize()
{
    var font_size = window.editor.getFontSize();
    var new_font_size = font_size + 1;
    editorSetFontSize(new_font_size);
}

function editorDecreaseFontSize()
{
    var font_size = window.editor.getFontSize();
    var new_font_size = font_size - 1;
    editorSetFontSize(new_font_size);
}

document.addEventListener('DOMContentLoaded', (event) =>
{

    var editor_element = document.getElementById('editor');

    if (editor_element)
        console.log('exists the #editor element');
    else
        return;

    if (!window.ace)
        return;

    window.editor = ace.edit("editor");
    window.default_font_size = 15;
    window.editor.setTheme("ace/theme/monokai");
    window.editor.getSession().setMode("ace/mode/plain_text");
    window.editor.setFontSize(window.default_font_size);
    window.editor_langs = [
        'plain_text', 'php', 'javascript', 'sh', 'css', 'scss', 'sql'
    ];

    var lang_mode = 'plain_text';
    editorSetLang(lang_mode);
});

class WYSIWYGEditor {
    constructor(containerId) {
        this.containerId = containerId;
        this.initEditor();
    }

    initEditor() {
        try {
            const editorContainer = document.getElementById(this.containerId);
            if (!editorContainer) throw new Error("Container not found");

            editorContainer.innerHTML = `
                <style>
                    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
                    body {
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        margin: 0;
                        padding: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        background-color: #f5f5f5;
                    }

                    .smart-editor {
                        width: 80%;
                        max-width: 800px;
                        background-color: #fff;
                        border-radius: 8px;
                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                        overflow: hidden;
                    }

                    .toolbar {
                        background-color: #0078d4;
                        padding: 10px;
                        border-bottom: 1px solid #ccc;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-between;
                    }

                    .toolbar button, .toolbar input {
                        background: none;
                        border: none;
                        color: #fff;
                        font-size: 14px;
                        margin: 5px;
                        cursor: pointer;
                        transition: background 0.3s ease;
                        padding: 5px 10px;
                        border-radius: 4px;
                        display: flex;
                        align-items: center;
                    }

                    .toolbar button:hover, .toolbar input:hover {
                        background-color: #005a9e;
                    }

                    .toolbar button i {
                        margin-right: 5px;
                    }

                    #editor {
                        min-height: 300px;
                        padding: 15px;
                        border: none;
                        outline: none;
                        font-size: 16px;
                        color: #333;
                        line-height: 1.6;
                        background-color: #fefefe;
                    }

                    .toolbar button:focus, .toolbar input:focus, #editor:focus {
                        outline: none;
                    }
                </style>
                <div class="smart-editor">
                    <div class="toolbar">
                        <button onclick="editor.formatText('bold')"><i class="fas fa-bold"></i> Bold</button>
                        <button onclick="editor.formatText('italic')"><i class="fas fa-italic"></i> Italic</button>
                        <button onclick="editor.formatText('underline')"><i class="fas fa-underline"></i> Underline</button>
                        <button onclick="editor.formatText('strikeThrough')"><i class="fas fa-strikethrough"></i> Strike</button>
                        <button onclick="editor.formatText('superscript')"><i class="fas fa-superscript"></i> Sup</button>
                        <button onclick="editor.formatText('subscript')"><i class="fas fa-subscript"></i> Sub</button>
                        <button onclick="editor.formatText('justifyLeft')"><i class="fas fa-align-left"></i> Left</button>
                        <button onclick="editor.formatText('justifyCenter')"><i class="fas fa-align-center"></i> Center</button>
                        <button onclick="editor.formatText('justifyRight')"><i class="fas fa-align-right"></i> Right</button>
                        <button onclick="editor.formatText('justifyFull')"><i class="fas fa-align-justify"></i> Justify</button>
                        <button onclick="editor.formatText('insertOrderedList')"><i class="fas fa-list-ol"></i> OL</button>
                        <button onclick="editor.formatText('insertUnorderedList')"><i class="fas fa-list-ul"></i> UL</button>
                        <input type="color" id="textColor" title="Text Color" onchange="editor.formatText('foreColor', this.value)">
                        <input type="color" id="bgColor" title="Background Color" onchange="editor.formatText('hiliteColor', this.value)">
                        <button onclick="editor.formatText('createLink', prompt('Enter URL'))"><i class="fas fa-link"></i> Link</button>
                        <button onclick="editor.formatText('unlink')"><i class="fas fa-unlink"></i> Unlink</button>
                        <button onclick="editor.formatText('insertImage', prompt('Enter image URL'))"><i class="fas fa-image"></i> Image</button>
                        <button onclick="editor.formatText('insertHTML', prompt('Enter HTML code'))"><i class="fas fa-code"></i> HTML</button>
                        <button onclick="editor.formatText('formatBlock', 'blockquote')"><i class="fas fa-quote-right"></i> Blockquote</button>
                        <button onclick="editor.formatText('insertHTML', '<pre>' + prompt('Enter code') + '</pre>')"><i class="fas fa-code"></i> Code</button>
                        <button onclick="editor.formatText('insertHTML', prompt('Enter emoji'))"><i class="fas fa-smile"></i> Emoji</button>
                        <button onclick="document.execCommand('undo')"><i class="fas fa-undo"></i> Undo</button>
                        <button onclick="document.execCommand('redo')"><i class="fas fa-redo"></i> Redo</button>
                        <button onclick="editor.toggleFullScreen()"><i class="fas fa-expand"></i> Fullscreen</button>
                    </div>
                    <div id="editor" contenteditable="true"></div>
                </div>
            `;
        } catch (error) {
            console.error("Error initializing editor:", error);
        }
    }

    formatText(command, value = null) {
        try {
            document.execCommand(command, false, value);
        } catch (error) {
            console.error(`Error executing command ${command}:`, error);
        }
    }

    toggleFullScreen() {
        try {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
            } else if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        } catch (error) {
            console.error("Error toggling fullscreen:", error);
        }
    }
}

// Example usage:
const editor = new WYSIWYGEditor('smart-editor');

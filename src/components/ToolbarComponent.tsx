import React from "react";
import { ItoolBarState } from "../interface";

const TOOLBAR_USED_COLOR = "#1976d2";
const TOOLBAR_NOT_USED_COLOR = "#e0e0e0";

const getToolbarButtonStyles = (isUsed: boolean) => ({
    backgroundColor: isUsed ? TOOLBAR_USED_COLOR : TOOLBAR_NOT_USED_COLOR
});

const ToolbarComponent = ({
    toolBarState,
    textBgColor
}: {
    toolBarState: ItoolBarState;
    textBgColor: string;
}) => {
    const handleTextStyleButton = (textStyle: string) => {
        document.execCommand(textStyle, false, "");
    };

    const handleTextColor = () => {
        const color = prompt("Enter color");
        if (!color) {
            return;
        }
        document.execCommand("backColor", true, color);
    };
    return (
        <div className="text-center toobar btn-group my-2" role="group">

            <button
                type="button"
                className="btn my-2"
                style={getToolbarButtonStyles(toolBarState.bold)}
                onClick={() => { handleTextStyleButton('bold') }}
            >bold</button>
            <button
                type="button"
                className="btn my-2"
                style={getToolbarButtonStyles(toolBarState.underline)}
                onClick={() => { handleTextStyleButton('underline') }}
            >underline</button>
            <button
                type="button"
                className="btn my-2"
                style={getToolbarButtonStyles(toolBarState.italic)}
                onClick={() => { handleTextStyleButton('italic') }}
            >italic</button>
            <button
                type="button"
                className="btn my-2"
                style={{
                    backgroundColor: textBgColor
                }}
                onClick={handleTextColor}
            >color</button>
        </div>
    );
};

export default ToolbarComponent
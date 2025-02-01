import React from 'react'
import { CopyBlock, dracula } from 'react-code-blocks';


const CodeBlock = ({ code, language, showLineNumbers, onCopy }) => {
    return (
        <div>
            <CopyBlock
                text={code}
                language={language}
                showLineNumbers={showLineNumbers}
                theme={dracula}
                codeBlock
                onCopy={onCopy}
            />
        </div>
    )
}

export default CodeBlock

import React from 'react';
import { IRelatedWords, IWord } from '../interface';


const RelatedWordsComponent = ({
    relatedWords,
    setRelatedWords
}: {
    relatedWords: IRelatedWords;
    setRelatedWords: any;
}) => {
    const clickRelatedWord = (word: IWord) => {
        setRelatedWords({ show: false, words: [] });
        if (relatedWords.range) {
            relatedWords.range.deleteContents();
            relatedWords.range.insertNode(document.createTextNode(`${word.word} `));
        }
    };

    return (
        <React.Fragment>
            <ul className="list-group">
                {relatedWords.words.map((word: any, index: number) => (
                    <li
                        className="list-group-item"
                        key={index}
                        onClick={() => clickRelatedWord(word)}
                    >{word.word}</li>
                ))}
            </ul>
        </React.Fragment>
    );
};

export default RelatedWordsComponent;
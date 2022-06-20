import React from 'react';

const Sort = ({value, onChangeSort}) => {
    const [open, setOpen] = React.useState(false);

    const list = [
        {name: 'рейтингу(DESC)', sortProperty: 'rating'},
        {name: 'рейтингу(ASC)', sortProperty: '-rating'},
        {name: 'цене(DESC)', sortProperty: 'price'},
        {name: 'цене(ASC)', sortProperty: '-price'},
        {name: 'алфавиту(DESC)', sortProperty: 'title'},
        {name: 'алфавиту(ASC)', sortProperty: '-title'},
        {name: 'id(DESC)', sortProperty: 'id'},
        {name: 'id(ASC)', sortProperty: '-id'},

    ];

    const onChooseItem = (index) => {
        onChangeSort(index);
        setOpen(false);
    };

    return (
        <div className="sort">
            <div onClick={() => setOpen(!open)}>
                <b>Сортировка по : </b>
                <span>{value.name}</span>
            </div>
            {open && (
                <div className="sort__popup">
                    <ul>
                        {list.map((obj, i) => (
                            <li onClick={() => onChooseItem(obj)}
                                key={i}>{obj.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Sort;
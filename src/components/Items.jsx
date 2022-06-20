import React from 'react';

const Items = ({items, loading, searchValue}) => {
    if (loading) {
        return <h2>loading</h2>
    }

    console.log(searchValue)
    return(
        <div>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Rating</th>
                    <th>Image</th>
                    <th>ID</th>
                </tr>
                </thead>
                <tbody>
                {items
                    .filter((obj) => {
                        if(obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
                            return true
                        }
                        return false
                    })
                    .map((el, i) => (
                    <tr key={i}>
                        <td>{el.title}</td>
                        <td>{el.price}</td>
                        <td>{el.rating}</td>
                        <td className="imgItem"><img src={el.imageUrl} alt="" width={30}/></td>
                        <td>{el.id}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
};

export default Items;
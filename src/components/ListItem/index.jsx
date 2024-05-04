function ListItem(props) {



    return (
        <>
            <p>{props.listItem}</p>
            <button>Complete</button>
            <button>Delete</button>
        </>
    );
};

export default ListItem;
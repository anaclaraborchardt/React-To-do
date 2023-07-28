
function Card(cards){

    const classes = 'cards '+ cards.className;
    return <div className={classes}>{cards.children}</div>
}
export default Card;
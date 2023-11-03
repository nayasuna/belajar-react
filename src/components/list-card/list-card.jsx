import styled from "./list-card.module.css"

function ListCard(){
    return (
        <div className={styled.listCard + ""+ styled.margin}>
            <div className={styled.card}>satu</div>
            <div className={styled.card}>dua</div>
            <div className={styled.card}>tiga</div>
        </div>
    )
}

export default ListCard;
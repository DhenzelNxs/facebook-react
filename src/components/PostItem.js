import React from "react";

function HeaderPost({ autor, data }){
    return(
        <div className="post-header">
            <img className="avatar" src={autor.avatar} alt="Avatar"></img>
            <div className="details">
                <span>{autor.name}</span>
                <span>{data}</span>
            </div>
        </div>
    )
}


function CommentsPosts({ comentarios }){
    return(
        <div className="post-comments">
            <div className="divider"/>
            {comentarios.map(comment => (
                <div key={comment.id} className="comment">
                    <img className="avatar" src={comment.autor.avatar} alt="autorComment"/>
                    <p>
                        <span>{comment.autor.name}</span>
                        {comment.conteudo}
                    </p>

                </div>
            ))}

        </div>
    )
}

function ItemPost({ autor, data, conteudo, comentarios}){
    <div className="post">
        <HeaderPost autor={autor} data={data}></HeaderPost>
        <p className="post-content">{conteudo}</p>
        <CommentsPosts comentarios={comentarios}></CommentsPosts>
    </div>

}

export default ItemPost
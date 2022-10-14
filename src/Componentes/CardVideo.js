import styled from "styled-components";

const estilizacaoCard = styled.div`
background: #09b0ec;
  color: yellow;
`;

function CardVideo(props) {
  function reproduzVideo(props) {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <estilizacaoCard className="box-pagina-principal" onClick={reproduzVideo}>
      <img src={props.image1} alt={props.textoAlternativo} />
      <h4>{props.titulo}</h4>
    </estilizacaoCard>
  );
}

export default CardVideo;

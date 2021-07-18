import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function List(props) {
  const [likes, setLikes] = useState(props.data.likeada);

  function carregaIcone(likeada) {
    return likeada ? require('../img/likeada.png') : require('../img/like.png');
  }

  function mostraLikes(likers) {
    if (likers === 0) {
      return;
    }

    return (
      <Text style={styles.likes}>
        {likers} {likers > 1 ? 'curtidas' : 'curtida'}
      </Text>
    );
  }

  return (
    <View>
      <View style={styles.viewPerfil}>
        <Image source={{uri: props.data.imgperfil}} style={styles.fotoPerfil} />
        <Text style={styles.nomeUsuario}>{props.data.nome}</Text>
      </View>

      <Image
        resizeMode="cover"
        source={{uri: props.data.imgPublicacao}}
        style={styles.fotoPublicacao}
      />

      <View style={styles.areaBtn}>
        <TouchableOpacity
          onPress={() => {
            props.data.likeada
              ? setLikes((props.data.likeada = false))
              : setLikes((props.data.likeada = true));
          }}>
          <Image source={carregaIcone(likes)} style={styles.iconeLike} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSend}>
          <Image
            source={require('../img/comment.png')}
            style={styles.iconeLike}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSend}>
          <Image source={require('../img/send.png')} style={styles.iconeLike} />
        </TouchableOpacity>
      </View>

      {mostraLikes(props.data.likers)}
      <Text style={styles.rodape}>
        <Text style={styles.nomeRodape}>{props.data.nome}</Text>{' '}
        <Text style={styles.descRodape}>{props.data.descricao}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewPerfil: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8,
  },
  fotoPerfil: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  nomeUsuario: {
    paddingLeft: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  fotoPublicacao: {
    height: 400,
    alignItems: 'center',
    marginLeft: 3,
    marginRight: 3,
  },
  areaBtn: {
    flexDirection: 'row',
    padding: 8,
    paddingLeft: 10,
  },
  iconeLike: {
    width: 25,
    height: 25,
  },
  btnSend: {
    paddingLeft: 15,
  },
  likes: {
    fontWeight: 'bold',
    marginLeft: 10,
  },
  rodape: {
    marginLeft: 10,
    marginBottom: 10,
  },
  nomeRodape: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  descRodape: {
    fontSize: 14,
    paddingLeft: 5,
    paddingBottom: 10,
  },
});

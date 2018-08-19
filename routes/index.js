var express = require('express');
var router = express.Router();


const bios = {
	helicopterson: {
		name: 'Helicopterson dos santos',
		role: 'Escritor, poeta, filantropo',
		birth:'1870',
		death: '1950', 
		background: 'Helicopterson sempre foi um jovem estudioso',
		photo: '/images/helicopterson.png',
		quote: 'Se nao for pra voar, eu nem desço pro play',
		highlights: ['nasceu', 'voou', 'voou mais alto', 'primeiro homem a pisar na lua', 'sumiu'],
	};
	lincoln: {
	    name: 'Abraham Lincoln',
	    role: 'Ex-presidente, advogado',
	    birth: '1809',
	    death: '1865',
	    photo: '/images/lincoln.png',
	    background: 'Abraham Lincoln foi um político norte-americano que serviu como o 16° presidente dos Estados Unidos, posto que ocupou de 4 de março de 1861 até seu assassinato em 15 de abril de 1865. Lincoln liderou o país de forma bem-sucedida durante sua maior crise interna, a Guerra Civil Americana, preservando a União e abolindo a escravidão, fortalecendo o governo nacional. Lincoln tem sido consistentemente considerado por estudiosos e pelo povo como um dos três maiores presidentes dos Estados Unidos.',
	    quote: 'Governo das pessoas, pelas pessoas, para as pessoas, nunca deixará de existir na Terra.',
	    highlights: ['Aprovou a Lei da Propriedade Rural', 'Emitiu a Proclamação de Emancipação, que levou à abolição da escravatura nos EUA', 'Liderou a União à vitória da Guerra Civil'],
	};
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Meu primeiro WebApp Incrível', status: 'de boa' });
});

router.get('/:id', function(req, res, next){
	const id = req.params.id;
	res.render('bio', bios[id]);
});

module.exports = router;

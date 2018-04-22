var assetsReady = false, loader = new PxLoader();
var imageTool = {
	ctrl_left: loader.addImage("control/ctrl_left.png"),
	ctrl_right: loader.addImage("control/ctrl_right.png"),
	//Sources
	loading : loader.addImage("img/loading.png"),
	xmark : loader.addImage("img/xmark.png"),
	ui : loader.addImage("img/ui.png"),
	uibar : loader.addImage("img/uibar.png"),
	uinote : loader.addImage("img/uinote.png"),
	// minimap
	visited : loader.addImage("img/visited.png"),
	unvisited : loader.addImage("img/unvisited.png"),
	current : loader.addImage("img/current.png"),
	boss : loader.addImage("img/boss.png"),
	shop : loader.addImage("img/shop.png"),
	treasure : loader.addImage("img/treasure.png"),
	secret : loader.addImage("img/secret.png"),
	sacrifice : loader.addImage("img/sacrifice.png"),
	cursed : loader.addImage("img/cursed.png"),
	minihp : loader.addImage("img/minihp.png"),
	minicoin : loader.addImage("img/minicoin.png"),
	minichest : loader.addImage("img/minichest.png"),
	minibomb : loader.addImage("img/minibomb.png"),
	minikey : loader.addImage("img/minikey.png"),
	//Floors
	bg1 : loader.addImage("img/bg.png"),
	bg2 : loader.addImage("img/bgcave.png"),
	bg3 : loader.addImage("img/bgnecropolis.png"),
	overlayboss : loader.addImage("img/bgboss.png"),
	overlay1 : loader.addImage("img/bgovercellar.png"),
	overlay2 : loader.addImage("img/bgovercave.png"),
	bgsecret : loader.addImage("img/bgsecret.png"),
	//game
	curseddoorL : loader.addImage("img/cursedroomleft.png"),
	curseddoorU : loader.addImage("img/cursedroomup.png"),
	curseddoorR : loader.addImage("img/cursedroomright.png"),
	curseddoorD : loader.addImage("img/cursedroomdown.png"),
	spikes : loader.addImage("img/spikes.png"),
	keyholeU : loader.addImage("img/keyholeup.png"),
	keyholeD : loader.addImage("img/keyholedown.png"),
	keyholeL : loader.addImage("img/keyholeleft.png"),
	keyholeR : loader.addImage("img/keyholeright.png"),
	shopKeyholeU : loader.addImage("img/shopkeyholeup.png"),
	shopKeyholeD : loader.addImage("img/shopkeyholedown.png"),
	shopKeyholeL : loader.addImage("img/shopkeyholeleft.png"),
	shopKeyholeR : loader.addImage("img/shopkeyholeright.png"),
	spacer : loader.addImage("img/0.png"),
	tutorial : loader.addImage("img/tutorial.png"),
	pauseScreen : loader.addImage("img/pause.png"),
	blackScreen : loader.addImage("img/screen.png"),
	fullhp : loader.addImage("img/fullhp.png"),
	halfHp : loader.addImage("img/halfhp.png"),
	ap : loader.addImage("img/armor.png"),
	halfAp : loader.addImage("img/halfarmor.png"),
	emptyHp : loader.addImage("img/emptyhp.png"),
	towerHit : loader.addImage("img/towerhit.png"),
	project : loader.addImage("img/project.png"),
	projectEye : loader.addImage("img/projecteye.png"),
	projectLimb1 : loader.addImage("img/projectlimb1.png"),
	projectLimb2 : loader.addImage("img/projectlimb2.png"),
	projectLimb3 : loader.addImage("img/projectlimb3.png"),
	projecthit : loader.addImage("img/projecthit.png"),
	projectLimb1hit : loader.addImage("img/projectlimb1hit.png"),
	projectLimb2hit : loader.addImage("img/projectlimb2hit.png"),
	projectLimb3hit : loader.addImage("img/projectlimb3hit.png"),
	duke : loader.addImage("img/duke.png"),
	dukehit : loader.addImage("img/dukehit.png"),
	dukeFlyAnim : loader.addImage("img/dukeflyanim.png"),
	dukeSwarmAnim : loader.addImage("img/dukeswarmanim.png"),
	duke2 : loader.addImage("img/duke2.png"),
	dukeFlyAnim2 : loader.addImage("img/dukeflyanim2.png"),
	dukeSwarmAnim2 : loader.addImage("img/dukeswarmanim2.png"),
	fly : loader.addImage("img/fly.png"),
	fly1 : loader.addImage("img/fly1.png"),
	flyAnim : loader.addImage("img/flyanim.png"),
	pooterLeft : loader.addImage("img/pooterleft.png"),
	pooterRight : loader.addImage("img/pooterright.png"),
	pooterHit : loader.addImage("img/pooterhit.png"),
	flyHit : loader.addImage("img/flyhit.png"),
	playerDead : loader.addImage("img/playerdead.png"),
	playerDown : loader.addImage("img/player.png"),
	playerLeft : loader.addImage("img/player1.png"),
	playerUp : loader.addImage("img/player2.png"),
	playerRight : loader.addImage("img/player3.png"),
	playerDownS : loader.addImage("img/player_s.png"),
	playerLeftS : loader.addImage("img/player1_s.png"),
	playerUpS : loader.addImage("img/player2_s.png"),
	playerRightS : loader.addImage("img/player3_s.png"),
	playerBullet : loader.addImage("img/bullet.png"),
	pBulletAnim : loader.addImage("img/pbulletanim.png"),
	bulletNumberOne : loader.addImage("img/bulletnumberone.png"),
	animNumberOne : loader.addImage("img/numberonebulletanim.png"),
	eBulletAnim : loader.addImage("img/ebulletanim.png"),
	explosion : loader.addImage("img/explosion.png"),
	explosionmark : loader.addImage("img/explosionmark.png"),
	tower : loader.addImage("img/tower.png"),
	enemyBullet : loader.addImage("img/enemybullet.png"),
	block : loader.addImage("img/block.png"),
	block1 : loader.addImage("img/block1.png"),
	block2 : loader.addImage("img/block2.png"),
	xblock : loader.addImage("img/block3.png"),
	glue : loader.addImage("img/glue.png"),
	shadow : loader.addImage("img/shadow.png"),
	blood1 : loader.addImage("img/blood1.png"),
	blood2 : loader.addImage("img/blood2.png"),
	blood3 : loader.addImage("img/blood3.png"),
	bloodRoom : loader.addImage("img/bloodroom.png"),
	bloodAnim : loader.addImage("img/bloodanimation.png"),
	playerloot : loader.addImage("img/playerloot.png"),
	bodyAnim : loader.addImage("img/bodyanimation.png"),
	bodyRight : loader.addImage("img/bodyanimationright.png"),
	bodyLeft : loader.addImage("img/bodyanimationleft.png"),
	bodyIdle : loader.addImage("img/bodyidle.png"),
	eBodyIdle : loader.addImage("img/ebodyidle.png"),
	eBodyRight : loader.addImage("img/ebodyanimationright.png"),
	eBodyLeft : loader.addImage("img/ebodyanimationleft.png"),
	mulliganhead : loader.addImage("img/mulliganhead.png"),
	mulliganheadhit : loader.addImage("img/mulliganheadhit.png"),
	hitBox : loader.addImage("img/hit.png"),
	doorL : loader.addImage("img/doorleft.png"),
	doorR : loader.addImage("img/doorright.png"),
	doorU : loader.addImage("img/doorup.png"),
	doorD : loader.addImage("img/doordown.png"),
	TdoorL : loader.addImage("img/treasuredoorleft.png"),
	TdoorR : loader.addImage("img/treasuredoorright.png"),
	TdoorU : loader.addImage("img/treasuredoorup.png"),
	TdoorD : loader.addImage("img/treasuredoordown.png"),
	BdoorL : loader.addImage("img/bossdoorleft.png"),
	BdoorR : loader.addImage("img/bossdoorright.png"),
	BdoorU : loader.addImage("img/bossdoorup.png"),
	BdoorD : loader.addImage("img/bossdoordown.png"),
	doorUclosed : loader.addImage("img/closeddoorup.png"),
	doorDclosed : loader.addImage("img/closeddoordown.png"),
	doorLclosed : loader.addImage("img/closeddoorleft.png"),
	doorRclosed : loader.addImage("img/closeddoorright.png"),
	doorLopen : loader.addImage("img/openleft.png"),
	doorRopen : loader.addImage("img/openright.png"),
	doorUopen : loader.addImage("img/openup.png"),
	doorDopen : loader.addImage("img/opendown.png"),
	secretL : loader.addImage("img/secretleft.png"),
	secretR : loader.addImage("img/secretright.png"),
	secretU : loader.addImage("img/secretup.png"),
	secretD : loader.addImage("img/secretdown.png"),
	bossBar : loader.addImage("img/bossbar.png"),
	bossBg : loader.addImage("img/bossbg.png"),
	bossHp : loader.addImage("img/bosshp.png"),
	bossHpHit : loader.addImage("img/bosshphit.png"),
	spiderIdleAnim : loader.addImage("img/spideridleanim.png"),
	spiderMoveAnim : loader.addImage("img/spidermoveanim.png"),
	spiderHit : loader.addImage("img/spiderhit.png"),
	spiderButt : loader.addImage("img/spiderbutt.png"),
	spiderButtHit : loader.addImage("img/spiderbutthit.png"),
	clotty : loader.addImage("img/clotty.png"),
	clottyhitleft : loader.addImage("img/clottyhitleft.png"),
	clottyhitright : loader.addImage("img/clottyhitright.png"),
	clottyfront : loader.addImage("img/clottyfront.png"),
	clottyattack : loader.addImage("img/clottyattack.png"),
	clottyright : loader.addImage("img/clottyright.png"),
	clottyleft : loader.addImage("img/clottyleft.png"),
	maggotfront : loader.addImage("img/maggottop.png"),
	maggotdown : loader.addImage("img/maggotdown.png"),
	maggotright : loader.addImage("img/maggotright.png"),
	maggotleft : loader.addImage("img/maggotleft.png"),
	maggothitside : loader.addImage("img/maggothitside.png"),
	maggothitfront : loader.addImage("img/maggothitfront.png"),
	poop1 : loader.addImage("img/poop1.png"),
	poop2 : loader.addImage("img/poop2.png"),
	poop3 : loader.addImage("img/poop3.png"),
	poop4 : loader.addImage("img/poop4.png"),
	poop5 : loader.addImage("img/poop5.png"),
	poopAnim : loader.addImage("img/poopanimation.png"),
	fireon : loader.addImage("img/fireon.png"),
	fireoff : loader.addImage("img/fireoff.png"),
	fireplace : loader.addImage("img/fireplace.png"),
	hellfireplace : loader.addImage("img/hellfireplace.png"),
	barrel1 : loader.addImage("img/barrel1.png"),
	barrel2 : loader.addImage("img/barrel2.png"),
	barrel3 : loader.addImage("img/barrel3.png"),
	barrel4 : loader.addImage("img/barrel4.png"),
	deathlight : loader.addImage("img/deathlight.png"),
	gameover : loader.addImage("img/gameover.png"),
	shopkeeper1 : loader.addImage("img/sk1.png"),
	shopkeeper2 : loader.addImage("img/sk2.png"),
	shopkeeper3 : loader.addImage("img/sk3.png"),
	shopkeeper4 : loader.addImage("img/sk4.png"),
	shopkeeper5 : loader.addImage("img/sk5.png"),
	shopkeeper6 : loader.addImage("img/sk6.png"),
	shopkeeper7 : loader.addImage("img/sk7.png"),
	shopkeeper8 : loader.addImage("img/sk8.png"),
	shopkeeper9 : loader.addImage("img/sk9.png"),
	HA : loader.addImage("img/HA.png"),
	HB : loader.addImage("img/HB.png"),
	HC : loader.addImage("img/HC.png"),
	HD : loader.addImage("img/HD.png"),
	HE : loader.addImage("img/HE.png"),
	HF : loader.addImage("img/HF.png"),
	HG : loader.addImage("img/HG.png"),
	HH : loader.addImage("img/HH.png"),
	HI : loader.addImage("img/HI.png"),
	HJ : loader.addImage("img/HJ.png"),
	HK : loader.addImage("img/HK.png"),
	HL : loader.addImage("img/HL.png"),
	HM : loader.addImage("img/HM.png"),
	HN : loader.addImage("img/HN.png"),
	HO : loader.addImage("img/HO.png"),
	HP : loader.addImage("img/HP.png"),
	// items
	chest : loader.addImage("img/chest.png"),
	redchest : loader.addImage("img/redchest.png"),
	chestopen : loader.addImage("img/chestopen.png"),
	redchestopen : loader.addImage("img/redchestopen.png"),
	haloofflies : loader.addImage("img/haloofflies.png"),
	trapdoor : loader.addImage("img/trapdoor.png"),
	coin : loader.addImage("img/coin.png"),
	bomb : loader.addImage("img/bomb.png"),
	armor : loader.addImage("img/soulheart.png"),
	health : loader.addImage("img/health.png"),
	halfhealth : loader.addImage("img/halfhealth.png"),
	nickel : loader.addImage("img/nickel.png"),
	dime : loader.addImage("img/dime.png"),
	key : loader.addImage("img/key.png"),
	boom : loader.addImage("img/boom.png"),
	breakfast : loader.addImage("img/breakfast.png"),
	bucketoflard : loader.addImage("img/bucketoflard.png"),
	dessert : loader.addImage("img/dessert.png"),
	dinner : loader.addImage("img/dinner.png"),
	growthhormones : loader.addImage("img/growthhormones.png"),
	jesusjuice : loader.addImage("img/jesusjuice.png"),
	lunch : loader.addImage("img/lunch.png"),
	magicmushroom : loader.addImage("img/magicmushroom.png"),
	maxshead : loader.addImage("img/maxshead.png"),
	meat : loader.addImage("img/meat.png"),
	minimushroom : loader.addImage("img/minimushroom.png"),
	momsheels : loader.addImage("img/momsheels.png"),
	momslipstick : loader.addImage("img/momslipstick.png"),
	momsunderwear : loader.addImage("img/momsunderwear.png"),
	numberone : loader.addImage("img/numberone.png"),
	pyro : loader.addImage("img/pyro.png"),
	rawliver : loader.addImage("img/rawliver.png"),
	redheart : loader.addImage("img/redheart.png"),
	roidrage : loader.addImage("img/roidrage.png"),
	rottenmeat : loader.addImage("img/rottenmeat.png"),
	skeletonkey : loader.addImage("img/skeletonkey.png"),
	speedball : loader.addImage("img/speedball.png"),
	thebelt : loader.addImage("img/thebelt.png"),
	thehalo : loader.addImage("img/thehalo.png"),
	thesadonion : loader.addImage("img/thesadonion.png"),
	thesmallrock : loader.addImage("img/thesmallrock.png"),
	toothpicks : loader.addImage("img/toothpicks.png"),
	wirecoathanger : loader.addImage("img/wirecoathanger.png"),
	woodenspoon : loader.addImage("img/woodenspoon.png"),
	wiggleworm : loader.addImage("img/wiggleworm.png"),
	thecompass : loader.addImage("img/thecompass.png"),
	treasuremap : loader.addImage("img/treasuremap.png"),
	theinnereye : loader.addImage("img/theinnereye.png"),
	price3 : loader.addImage("img/price3.png"),
	price5 : loader.addImage("img/price5.png"),
	price15 : loader.addImage("img/price15.png"),

	//DÉTAILS

	toothpicksfront : loader.addImage("img/toothpicksfront.png"),
	toothpicksside : loader.addImage("img/toothpicksside.png"),
	smallrockback : loader.addImage("img/smallrockback.png"),
	smallrockfront : loader.addImage("img/smallrockfront.png"),
	smallrockright : loader.addImage("img/smallrockright.png"),
	speedballback : loader.addImage("img/speedballback.png"),
	wireback : loader.addImage("img/wireback.png"),
	wirefront : loader.addImage("img/wirefront.png"),
	wireleft : loader.addImage("img/wireleft.png"),
	wireright : loader.addImage("img/wireright.png"),
	jesusjuicefront : loader.addImage("img/jesusjuicefront.png"),
	jesusjuiceleft : loader.addImage("img/jesusjuiceleft.png"),
	jesusjuiceright : loader.addImage("img/jesusjuiceright.png"),
	lipstickfront : loader.addImage("img/lipstickfront.png"),
	lipstickleft : loader.addImage("img/lipstickleft.png"),
	lipstickright : loader.addImage("img/lipstickright.png"),
	innerfront : loader.addImage("img/innerfront.png"),
	innerfronts : loader.addImage("img/innerfront_s.png"),
	innerleft : loader.addImage("img/innerleft.png"),
	innerlefts : loader.addImage("img/innerleft_s.png"),
	innerright : loader.addImage("img/innerright.png"),
	innerrights : loader.addImage("img/innerright_s.png"),
	nofront : loader.addImage("img/nofront.png"),
	nofronts : loader.addImage("img/nofront_s.png"),
	noleft : loader.addImage("img/noleft.png"),
	nolefts : loader.addImage("img/noleft_s.png"),
	noright : loader.addImage("img/noright.png"),
	norights : loader.addImage("img/noright_s.png"),
	speedfront : loader.addImage("img/speedfront.png"),
	speedfronts : loader.addImage("img/speedfront_s.png"),
	speedleft : loader.addImage("img/speedleft.png"),
	speedlefts : loader.addImage("img/speedleft_s.png"),
	speedright : loader.addImage("img/speedright.png"),
	speedrights : loader.addImage("img/speedright_s.png"),
	ghormonesfront : loader.addImage("img/ghormonesfront.png"),
	ghormonesback : loader.addImage("img/ghormonesback.png"),
	ghormonesleft : loader.addImage("img/ghormonesleft.png"),
	ghormonesright : loader.addImage("img/ghormonesright.png"),
	heartanim : loader.addImage("img/heartanim.png"),
	skeyfront : loader.addImage("img/skeyfront.png"),
	belt : loader.addImage("img/belt.png")
};
 

// Initialisation dès que les assets sont chargés
loader.addCompletionListener(function() { 
            gameInit();
            loading(false);
	assetsReady = true;
	console.log(Object.keys(imageTool).length  + " Assets Loaded");
}); 
 
//Call le lancement du load
loader.start();
console.log("files.js Loaded");
import React from 'react';
import {Link} from 'react-router-dom'

class Match extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            matchDataFull: {"gameId":2876415736,"platformId":"NA1","gameCreation":1538194393833,"gameDuration":1469,"queueId":420,"mapId":11,"seasonId":11,"gameVersion":"8.19.246.5109","gameMode":"CLASSIC","gameType":"MATCHED_GAME","teams":[{"teamId":100,"win":"Win","firstBlood":true,"firstTower":true,"firstInhibitor":false,"firstBaron":false,"firstDragon":true,"firstRiftHerald":true,"towerKills":6,"inhibitorKills":0,"baronKills":0,"dragonKills":2,"vilemawKills":0,"riftHeraldKills":1,"dominionVictoryScore":0,"bans":[{"championId":222,"pickTurn":1},{"championId":122,"pickTurn":2},{"championId":238,"pickTurn":3},{"championId":39,"pickTurn":4},{"championId":84,"pickTurn":5}]},{"teamId":200,"win":"Fail","firstBlood":false,"firstTower":false,"firstInhibitor":false,"firstBaron":false,"firstDragon":false,"firstRiftHerald":false,"towerKills":1,"inhibitorKills":0,"baronKills":0,"dragonKills":0,"vilemawKills":0,"riftHeraldKills":0,"dominionVictoryScore":0,"bans":[{"championId":22,"pickTurn":6},{"championId":23,"pickTurn":7},{"championId":89,"pickTurn":8},{"championId":105,"pickTurn":9},{"championId":157,"pickTurn":10}]}],"participants":[{"participantId":1,"teamId":100,"championId":131,"spell1Id":4,"spell2Id":11,"highestAchievedSeasonTier":"SILVER","stats":{"participantId":1,"win":true,"item0":1402,"item1":3020,"item2":3057,"item3":3115,"item4":3113,"item5":0,"item6":3340,"kills":11,"deaths":2,"assists":4,"largestKillingSpree":6,"largestMultiKill":1,"killingSprees":2,"longestTimeSpentLiving":940,"doubleKills":0,"tripleKills":0,"quadraKills":0,"pentaKills":0,"unrealKills":0,"totalDamageDealt":88192,"magicDamageDealt":57647,"physicalDamageDealt":20447,"trueDamageDealt":10098,"largestCriticalStrike":0,"totalDamageDealtToChampions":13874,"magicDamageDealtToChampions":11757,"physicalDamageDealtToChampions":1519,"trueDamageDealtToChampions":598,"totalHeal":3610,"totalUnitsHealed":1,"damageSelfMitigated":13091,"damageDealtToObjectives":12286,"damageDealtToTurrets":51,"visionScore":19,"timeCCingOthers":10,"totalDamageTaken":12972,"magicalDamageTaken":2045,"physicalDamageTaken":10381,"trueDamageTaken":545,"goldEarned":9314,"goldSpent":9025,"turretKills":1,"inhibitorKills":0,"totalMinionsKilled":25,"neutralMinionsKilled":76,"neutralMinionsKilledTeamJungle":49,"neutralMinionsKilledEnemyJungle":4,"totalTimeCrowdControlDealt":371,"champLevel":13,"visionWardsBoughtInGame":2,"sightWardsBoughtInGame":0,"wardsPlaced":9,"wardsKilled":2,"firstBloodKill":false,"firstBloodAssist":false,"firstTowerKill":false,"firstTowerAssist":false,"combatPlayerScore":0,"objectivePlayerScore":0,"totalPlayerScore":0,"totalScoreRank":0,"playerScore0":0,"playerScore1":0,"playerScore2":0,"playerScore3":0,"playerScore4":0,"playerScore5":0,"playerScore6":0,"playerScore7":0,"playerScore8":0,"playerScore9":0,"perk0":8112,"perk0Var1":1353,"perk0Var2":0,"perk0Var3":0,"perk1":8143,"perk1Var1":469,"perk1Var2":0,"perk1Var3":0,"perk2":8138,"perk2Var1":30,"perk2Var2":0,"perk2Var3":0,"perk3":8106,"perk3Var1":5,"perk3Var2":0,"perk3Var3":0,"perk4":8233,"perk4Var1":14,"perk4Var2":20,"perk4Var3":0,"perk5":8236,"perk5Var1":24,"perk5Var2":0,"perk5Var3":0,"perkPrimaryStyle":8100,"perkSubStyle":8200},"timeline":{"participantId":1,"creepsPerMinDeltas":{"10-20":1.5,"0-10":0.1},"xpPerMinDeltas":{"10-20":500.3,"0-10":291.6},"goldPerMinDeltas":{"10-20":422.5,"0-10":242.5},"damageTakenPerMinDeltas":{"10-20":565.8,"0-10":457.2},"role":"NONE","lane":"JUNGLE"}},{"participantId":2,"teamId":100,"championId":18,"spell1Id":7,"spell2Id":4,"highestAchievedSeasonTier":"SILVER","stats":{"participantId":2,"win":true,"item0":3031,"item1":3086,"item2":1037,"item3":3035,"item4":3006,"item5":3087,"item6":3340,"kills":18,"deaths":3,"assists":4,"largestKillingSpree":10,"largestMultiKill":2,"killingSprees":3,"longestTimeSpentLiving":681,"doubleKills":5,"tripleKills":0,"quadraKills":0,"pentaKills":0,"unrealKills":0,"totalDamageDealt":121371,"magicDamageDealt":32185,"physicalDamageDealt":86209,"trueDamageDealt":2975,"largestCriticalStrike":494,"totalDamageDealtToChampions":22239,"magicDamageDealtToChampions":4097,"physicalDamageDealtToChampions":16767,"trueDamageDealtToChampions":1373,"totalHeal":1268,"totalUnitsHealed":2,"damageSelfMitigated":5357,"damageDealtToObjectives":13466,"damageDealtToTurrets":6843,"visionScore":13,"timeCCingOthers":5,"totalDamageTaken":11097,"magicalDamageTaken":2762,"physicalDamageTaken":8017,"trueDamageTaken":317,"goldEarned":13552,"goldSpent":11875,"turretKills":1,"inhibitorKills":0,"totalMinionsKilled":147,"neutralMinionsKilled":20,"neutralMinionsKilledTeamJungle":4,"neutralMinionsKilledEnemyJungle":12,"totalTimeCrowdControlDealt":168,"champLevel":13,"visionWardsBoughtInGame":0,"sightWardsBoughtInGame":0,"wardsPlaced":6,"wardsKilled":0,"firstBloodKill":true,"firstBloodAssist":false,"firstTowerKill":true,"firstTowerAssist":false,"combatPlayerScore":0,"objectivePlayerScore":0,"totalPlayerScore":0,"totalScoreRank":0,"playerScore0":0,"playerScore1":0,"playerScore2":0,"playerScore3":0,"playerScore4":0,"playerScore5":0,"playerScore6":0,"playerScore7":0,"playerScore8":0,"playerScore9":0,"perk0":8008,"perk0Var1":1,"perk0Var2":40,"perk0Var3":0,"perk1":9101,"perk1Var1":1008,"perk1Var2":1476,"perk1Var3":0,"perk2":9104,"perk2Var1":10,"perk2Var2":40,"perk2Var3":0,"perk3":8014,"perk3Var1":632,"perk3Var2":0,"perk3Var3":0,"perk4":8236,"perk4Var1":14,"perk4Var2":0,"perk4Var3":0,"perk5":8233,"perk5Var1":15,"perk5Var2":0,"perk5Var3":0,"perkPrimaryStyle":8000,"perkSubStyle":8200},"timeline":{"participantId":2,"creepsPerMinDeltas":{"10-20":5.9,"0-10":5.9},"xpPerMinDeltas":{"10-20":540.5999999999999,"0-10":305.3},"goldPerMinDeltas":{"10-20":675.2,"0-10":357.9},"csDiffPerMinDeltas":{"10-20":0.34999999999999964,"0-10":1.6500000000000004},"xpDiffPerMinDeltas":{"10-20":114.94999999999999,"0-10":68.80000000000003},"damageTakenPerMinDeltas":{"10-20":569.4,"0-10":284.9},"damageTakenDiffPerMinDeltas":{"10-20":-110.89999999999998,"0-10":74.05000000000003},"role":"DUO_CARRY","lane":"BOTTOM"}},{"participantId":3,"teamId":100,"championId":7,"spell1Id":12,"spell2Id":14,"highestAchievedSeasonTier":"BRONZE","stats":{"participantId":3,"win":true,"item0":3165,"item1":3285,"item2":3020,"item3":0,"item4":2031,"item5":0,"item6":3340,"kills":6,"deaths":3,"assists":8,"largestKillingSpree":4,"largestMultiKill":2,"killingSprees":1,"longestTimeSpentLiving":558,"doubleKills":1,"tripleKills":0,"quadraKills":0,"pentaKills":0,"unrealKills":0,"totalDamageDealt":70468,"magicDamageDealt":49224,"physicalDamageDealt":13546,"trueDamageDealt":7697,"largestCriticalStrike":0,"totalDamageDealtToChampions":13092,"magicDamageDealtToChampions":11488,"physicalDamageDealtToChampions":1073,"trueDamageDealtToChampions":530,"totalHeal":1629,"totalUnitsHealed":1,"damageSelfMitigated":4319,"damageDealtToObjectives":3273,"damageDealtToTurrets":1938,"visionScore":15,"timeCCingOthers":8,"totalDamageTaken":11290,"magicalDamageTaken":3944,"physicalDamageTaken":7159,"trueDamageTaken":186,"goldEarned":9135,"goldSpent":7950,"turretKills":1,"inhibitorKills":0,"totalMinionsKilled":113,"neutralMinionsKilled":4,"neutralMinionsKilledTeamJungle":0,"neutralMinionsKilledEnemyJungle":4,"totalTimeCrowdControlDealt":27,"champLevel":13,"visionWardsBoughtInGame":0,"sightWardsBoughtInGame":0,"wardsPlaced":8,"wardsKilled":0,"firstBloodKill":false,"firstBloodAssist":false,"firstTowerKill":false,"firstTowerAssist":false,"combatPlayerScore":0,"objectivePlayerScore":0,"totalPlayerScore":0,"totalScoreRank":0,"playerScore0":0,"playerScore1":0,"playerScore2":0,"playerScore3":0,"playerScore4":0,"playerScore5":0,"playerScore6":0,"playerScore7":0,"playerScore8":0,"playerScore9":0,"perk0":8112,"perk0Var1":948,"perk0Var2":0,"perk0Var3":0,"perk1":8143,"perk1Var1":386,"perk1Var2":0,"perk1Var3":0,"perk2":8136,"perk2Var1":0,"perk2Var2":0,"perk2Var3":0,"perk3":8135,"perk3Var1":1270,"perk3Var2":5,"perk3Var3":0,"perk4":8316,"perk4Var1":532,"perk4Var2":0,"perk4Var3":0,"perk5":8352,"perk5Var1":169,"perk5Var2":0,"perk5Var3":0,"perkPrimaryStyle":8100,"perkSubStyle":8300},"timeline":{"participantId":3,"creepsPerMinDeltas":{"10-20":5.6,"0-10":3.5},"xpPerMinDeltas":{"10-20":486.79999999999995,"0-10":346.6},"goldPerMinDeltas":{"10-20":353.1,"0-10":212.4},"csDiffPerMinDeltas":{"10-20":2.6999999999999997,"0-10":-1},"xpDiffPerMinDeltas":{"10-20":231.89999999999998,"0-10":-60.80000000000001},"damageTakenPerMinDeltas":{"10-20":519.3,"0-10":413.2},"damageTakenDiffPerMinDeltas":{"10-20":-110.70000000000002,"0-10":131.4},"role":"SOLO","lane":"MIDDLE"}},{"participantId":4,"teamId":100,"championId":420,"spell1Id":12,"spell2Id":4,"highestAchievedSeasonTier":"SILVER","stats":{"participantId":4,"win":true,"item0":1055,"item1":3053,"item2":3057,"item3":3044,"item4":3047,"item5":1042,"item6":3340,"kills":2,"deaths":3,"assists":2,"largestKillingSpree":0,"largestMultiKill":1,"killingSprees":0,"longestTimeSpentLiving":606,"doubleKills":0,"tripleKills":0,"quadraKills":0,"pentaKills":0,"unrealKills":0,"totalDamageDealt":116589,"magicDamageDealt":0,"physicalDamageDealt":110125,"trueDamageDealt":6464,"largestCriticalStrike":0,"totalDamageDealtToChampions":10744,"magicDamageDealtToChampions":0,"physicalDamageDealtToChampions":9799,"trueDamageDealtToChampions":944,"totalHeal":3569,"totalUnitsHealed":1,"damageSelfMitigated":8726,"damageDealtToObjectives":11550,"damageDealtToTurrets":5078,"visionScore":10,"timeCCingOthers":2,"totalDamageTaken":14882,"magicalDamageTaken":2608,"physicalDamageTaken":11998,"trueDamageTaken":275,"goldEarned":8073,"goldSpent":7700,"turretKills":2,"inhibitorKills":0,"totalMinionsKilled":143,"neutralMinionsKilled":4,"neutralMinionsKilledTeamJungle":4,"neutralMinionsKilledEnemyJungle":0,"totalTimeCrowdControlDealt":27,"champLevel":14,"visionWardsBoughtInGame":0,"sightWardsBoughtInGame":0,"wardsPlaced":8,"wardsKilled":0,"firstBloodKill":false,"firstBloodAssist":false,"firstTowerKill":false,"firstTowerAssist":false,"combatPlayerScore":0,"objectivePlayerScore":0,"totalPlayerScore":0,"totalScoreRank":0,"playerScore0":0,"playerScore1":0,"playerScore2":0,"playerScore3":0,"playerScore4":0,"playerScore5":0,"playerScore6":0,"playerScore7":0,"playerScore8":0,"playerScore9":0,"perk0":8010,"perk0Var1":454,"perk0Var2":0,"perk0Var3":0,"perk1":9111,"perk1Var1":490,"perk1Var2":80,"perk1Var3":0,"perk2":9103,"perk2Var1":19,"perk2Var2":10,"perk2Var3":0,"perk3":8299,"perk3Var1":824,"perk3Var2":0,"perk3Var3":0,"perk4":8143,"perk4Var1":101,"perk4Var2":0,"perk4Var3":0,"perk5":8135,"perk5Var1":1543,"perk5Var2":2,"perk5Var3":0,"perkPrimaryStyle":8000,"perkSubStyle":8100},"timeline":{"participantId":4,"creepsPerMinDeltas":{"10-20":6.800000000000001,"0-10":4.3},"xpPerMinDeltas":{"10-20":507.2,"0-10":502},"goldPerMinDeltas":{"10-20":332,"0-10":241.6},"damageTakenPerMinDeltas":{"10-20":679.7,"0-10":499.9},"role":"NONE","lane":"JUNGLE"}},{"participantId":5,"teamId":100,"championId":201,"spell1Id":3,"spell2Id":4,"highestAchievedSeasonTier":"SILVER","stats":{"participantId":5,"win":true,"item0":3076,"item1":2031,"item2":3401,"item3":3068,"item4":3117,"item5":1029,"item6":3364,"kills":1,"deaths":1,"assists":19,"largestKillingSpree":0,"largestMultiKill":1,"killingSprees":0,"longestTimeSpentLiving":1297,"doubleKills":0,"tripleKills":0,"quadraKills":0,"pentaKills":0,"unrealKills":0,"totalDamageDealt":30479,"magicDamageDealt":14115,"physicalDamageDealt":8998,"trueDamageDealt":7365,"largestCriticalStrike":11,"totalDamageDealtToChampions":7204,"magicDamageDealtToChampions":6285,"physicalDamageDealtToChampions":919,"trueDamageDealtToChampions":0,"totalHeal":3623,"totalUnitsHealed":4,"damageSelfMitigated":15793,"damageDealtToObjectives":1537,"damageDealtToTurrets":980,"visionScore":28,"timeCCingOthers":28,"totalDamageTaken":15038,"magicalDamageTaken":5555,"physicalDamageTaken":8770,"trueDamageTaken":712,"goldEarned":7834,"goldSpent":6900,"turretKills":1,"inhibitorKills":0,"totalMinionsKilled":52,"neutralMinionsKilled":4,"neutralMinionsKilledTeamJungle":0,"neutralMinionsKilledEnemyJungle":0,"totalTimeCrowdControlDealt":161,"champLevel":12,"visionWardsBoughtInGame":0,"sightWardsBoughtInGame":0,"wardsPlaced":12,"wardsKilled":2,"firstBloodKill":false,"firstBloodAssist":false,"firstTowerKill":false,"firstTowerAssist":false,"combatPlayerScore":0,"objectivePlayerScore":0,"totalPlayerScore":0,"totalScoreRank":0,"playerScore0":0,"playerScore1":0,"playerScore2":0,"playerScore3":0,"playerScore4":0,"playerScore5":0,"playerScore6":0,"playerScore7":0,"playerScore8":0,"playerScore9":0,"perk0":8465,"perk0Var1":2187,"perk0Var2":0,"perk0Var3":0,"perk1":8463,"perk1Var1":866,"perk1Var2":0,"perk1Var3":0,"perk2":8429,"perk2Var1":59,"perk2Var2":19,"perk2Var3":10,"perk3":8242,"perk3Var1":9,"perk3Var2":0,"perk3Var3":0,"perk4":8347,"perk4Var1":0,"perk4Var2":0,"perk4Var3":0,"perk5":8304,"perk5Var1":8,"perk5Var2":3,"perk5Var3":0,"perkPrimaryStyle":8400,"perkSubStyle":8300},"timeline":{"participantId":5,"creepsPerMinDeltas":{"10-20":2.9,"0-10":1.7000000000000002},"xpPerMinDeltas":{"10-20":478.8,"0-10":255.2},"goldPerMinDeltas":{"10-20":365.29999999999995,"0-10":180.5},"csDiffPerMinDeltas":{"10-20":0.34999999999999964,"0-10":1.6500000000000004},"xpDiffPerMinDeltas":{"10-20":114.94999999999999,"0-10":68.80000000000003},"damageTakenPerMinDeltas":{"10-20":595.5999999999999,"0-10":345.5},"damageTakenDiffPerMinDeltas":{"10-20":-110.89999999999998,"0-10":74.05000000000003},"role":"DUO_SUPPORT","lane":"BOTTOM"}},{"participantId":6,"teamId":200,"championId":21,"spell1Id":7,"spell2Id":4,"highestAchievedSeasonTier":"SILVER","stats":{"participantId":6,"win":false,"item0":1055,"item1":3006,"item2":3067,"item3":3142,"item4":3044,"item5":0,"item6":3340,"kills":3,"deaths":8,"assists":3,"largestKillingSpree":0,"largestMultiKill":1,"killingSprees":0,"longestTimeSpentLiving":318,"doubleKills":0,"tripleKills":0,"quadraKills":0,"pentaKills":0,"unrealKills":0,"totalDamageDealt":55752,"magicDamageDealt":1404,"physicalDamageDealt":53940,"trueDamageDealt":407,"largestCriticalStrike":439,"totalDamageDealtToChampions":9661,"magicDamageDealtToChampions":230,"physicalDamageDealtToChampions":9077,"trueDamageDealtToChampions":353,"totalHeal":1933,"totalUnitsHealed":4,"damageSelfMitigated":4708,"damageDealtToObjectives":2000,"damageDealtToTurrets":1256,"visionScore":13,"timeCCingOthers":3,"totalDamageTaken":15826,"magicalDamageTaken":8187,"physicalDamageTaken":7406,"trueDamageTaken":232,"goldEarned":7354,"goldSpent":6550,"turretKills":0,"inhibitorKills":0,"totalMinionsKilled":108,"neutralMinionsKilled":0,"neutralMinionsKilledTeamJungle":0,"neutralMinionsKilledEnemyJungle":0,"totalTimeCrowdControlDealt":58,"champLevel":11,"visionWardsBoughtInGame":0,"sightWardsBoughtInGame":0,"wardsPlaced":7,"wardsKilled":2,"firstBloodKill":false,"firstBloodAssist":false,"firstTowerKill":false,"firstTowerAssist":false,"combatPlayerScore":0,"objectivePlayerScore":0,"totalPlayerScore":0,"totalScoreRank":0,"playerScore0":0,"playerScore1":0,"playerScore2":0,"playerScore3":0,"playerScore4":0,"playerScore5":0,"playerScore6":0,"playerScore7":0,"playerScore8":0,"playerScore9":0,"perk0":8112,"perk0Var1":369,"perk0Var2":0,"perk0Var3":0,"perk1":8126,"perk1Var1":353,"perk1Var2":0,"perk1Var3":0,"perk2":8138,"perk2Var1":6,"perk2Var2":0,"perk2Var3":0,"perk3":8106,"perk3Var1":5,"perk3Var2":0,"perk3Var3":0,"perk4":9104,"perk4Var1":22,"perk4Var2":40,"perk4Var3":0,"perk5":8017,"perk5Var1":220,"perk5Var2":0,"perk5Var3":0,"perkPrimaryStyle":8100,"perkSubStyle":8000},"timeline":{"participantId":6,"creepsPerMinDeltas":{"10-20":4.5,"0-10":4.1},"xpPerMinDeltas":{"10-20":341.4,"0-10":242.5},"goldPerMinDeltas":{"10-20":339.6,"0-10":188.3},"csDiffPerMinDeltas":{"10-20":-0.34999999999999964,"0-10":-1.6500000000000004},"xpDiffPerMinDeltas":{"10-20":-114.94999999999999,"0-10":-68.80000000000003},"damageTakenPerMinDeltas":{"10-20":763.7,"0-10":295.8},"damageTakenDiffPerMinDeltas":{"10-20":110.89999999999998,"0-10":-74.05000000000003},"role":"DUO_CARRY","lane":"BOTTOM"}},{"participantId":7,"teamId":200,"championId":99,"spell1Id":7,"spell2Id":4,"highestAchievedSeasonTier":"UNRANKED","stats":{"participantId":7,"win":false,"item0":3098,"item1":3802,"item2":3020,"item3":1058,"item4":0,"item5":0,"item6":3340,"kills":2,"deaths":8,"assists":2,"largestKillingSpree":0,"largestMultiKill":1,"killingSprees":0,"longestTimeSpentLiving":355,"doubleKills":0,"tripleKills":0,"quadraKills":0,"pentaKills":0,"unrealKills":0,"totalDamageDealt":44872,"magicDamageDealt":37569,"physicalDamageDealt":7302,"trueDamageDealt":0,"largestCriticalStrike":0,"totalDamageDealtToChampions":6080,"magicDamageDealtToChampions":5606,"physicalDamageDealtToChampions":473,"trueDamageDealtToChampions":0,"totalHeal":1131,"totalUnitsHealed":3,"damageSelfMitigated":5386,"damageDealtToObjectives":1540,"damageDealtToTurrets":466,"visionScore":10,"timeCCingOthers":31,"totalDamageTaken":12383,"magicalDamageTaken":5975,"physicalDamageTaken":5943,"trueDamageTaken":464,"goldEarned":6297,"goldSpent":4600,"turretKills":0,"inhibitorKills":0,"totalMinionsKilled":52,"neutralMinionsKilled":0,"neutralMinionsKilledTeamJungle":0,"neutralMinionsKilledEnemyJungle":0,"totalTimeCrowdControlDealt":139,"champLevel":11,"visionWardsBoughtInGame":0,"sightWardsBoughtInGame":0,"wardsPlaced":6,"wardsKilled":0,"firstBloodKill":false,"firstBloodAssist":false,"firstTowerKill":false,"firstTowerAssist":false,"combatPlayerScore":0,"objectivePlayerScore":0,"totalPlayerScore":0,"totalScoreRank":0,"playerScore0":0,"playerScore1":0,"playerScore2":0,"playerScore3":0,"playerScore4":0,"playerScore5":0,"playerScore6":0,"playerScore7":0,"playerScore8":0,"playerScore9":0,"perk0":8229,"perk0Var1":811,"perk0Var2":0,"perk0Var3":0,"perk1":8226,"perk1Var1":250,"perk1Var2":275,"perk1Var3":0,"perk2":8210,"perk2Var1":0,"perk2Var2":0,"perk2Var3":0,"perk3":8236,"perk3Var1":24,"perk3Var2":0,"perk3Var3":0,"perk4":8138,"perk4Var1":6,"perk4Var2":0,"perk4Var3":0,"perk5":8105,"perk5Var1":9,"perk5Var2":3,"perk5Var3":0,"perkPrimaryStyle":8200,"perkSubStyle":8100},"timeline":{"participantId":7,"creepsPerMinDeltas":{"10-20":3.6,"0-10":0.2},"xpPerMinDeltas":{"10-20":448.1,"0-10":180.39999999999998},"goldPerMinDeltas":{"10-20":238.2,"0-10":166.8},"csDiffPerMinDeltas":{"10-20":-0.34999999999999964,"0-10":-1.6500000000000004},"xpDiffPerMinDeltas":{"10-20":-114.94999999999999,"0-10":-68.80000000000003},"damageTakenPerMinDeltas":{"10-20":623.0999999999999,"0-10":186.5},"damageTakenDiffPerMinDeltas":{"10-20":110.89999999999998,"0-10":-74.05000000000003},"role":"DUO_SUPPORT","lane":"BOTTOM"}},{"participantId":8,"teamId":200,"championId":104,"spell1Id":11,"spell2Id":4,"highestAchievedSeasonTier":"SILVER","stats":{"participantId":8,"win":false,"item0":1412,"item1":2031,"item2":3006,"item3":3046,"item4":1036,"item5":0,"item6":3340,"kills":1,"deaths":9,"assists":6,"largestKillingSpree":0,"largestMultiKill":1,"killingSprees":0,"longestTimeSpentLiving":218,"doubleKills":0,"tripleKills":0,"quadraKills":0,"pentaKills":0,"unrealKills":0,"totalDamageDealt":96927,"magicDamageDealt":3965,"physicalDamageDealt":85015,"trueDamageDealt":7947,"largestCriticalStrike":193,"totalDamageDealtToChampions":8202,"magicDamageDealtToChampions":430,"physicalDamageDealtToChampions":6869,"trueDamageDealtToChampions":903,"totalHeal":4403,"totalUnitsHealed":1,"damageSelfMitigated":8236,"damageDealtToObjectives":2394,"damageDealtToTurrets":84,"visionScore":11,"timeCCingOthers":14,"totalDamageTaken":18597,"magicalDamageTaken":6831,"physicalDamageTaken":11268,"trueDamageTaken":498,"goldEarned":7335,"goldSpent":6925,"turretKills":0,"inhibitorKills":0,"totalMinionsKilled":45,"neutralMinionsKilled":76,"neutralMinionsKilledTeamJungle":63,"neutralMinionsKilledEnemyJungle":0,"totalTimeCrowdControlDealt":344,"champLevel":12,"visionWardsBoughtInGame":0,"sightWardsBoughtInGame":0,"wardsPlaced":6,"wardsKilled":0,"firstBloodKill":false,"firstBloodAssist":false,"firstTowerKill":false,"firstTowerAssist":false,"combatPlayerScore":0,"objectivePlayerScore":0,"totalPlayerScore":0,"totalScoreRank":0,"playerScore0":0,"playerScore1":0,"playerScore2":0,"playerScore3":0,"playerScore4":0,"playerScore5":0,"playerScore6":0,"playerScore7":0,"playerScore8":0,"playerScore9":0,"perk0":8010,"perk0Var1":63,"perk0Var2":0,"perk0Var3":0,"perk1":9111,"perk1Var1":44,"perk1Var2":140,"perk1Var3":0,"perk2":9104,"perk2Var1":19,"perk2Var2":30,"perk2Var3":0,"perk3":8299,"perk3Var1":279,"perk3Var2":0,"perk3Var3":0,"perk4":8135,"perk4Var1":1358,"perk4Var2":4,"perk4Var3":0,"perk5":8138,"perk5Var1":4,"perk5Var2":0,"perk5Var3":0,"perkPrimaryStyle":8000,"perkSubStyle":8100},"timeline":{"participantId":8,"creepsPerMinDeltas":{"10-20":2.8,"0-10":0.9},"xpPerMinDeltas":{"10-20":423.29999999999995,"0-10":270.20000000000005},"goldPerMinDeltas":{"10-20":301.4,"0-10":248.5},"damageTakenPerMinDeltas":{"10-20":861.2,"0-10":579.7},"role":"NONE","lane":"JUNGLE"}},{"participantId":9,"teamId":200,"championId":2,"spell1Id":4,"spell2Id":12,"highestAchievedSeasonTier":"BRONZE","stats":{"participantId":9,"win":false,"item0":3071,"item1":3009,"item2":2033,"item3":3742,"item4":3024,"item5":1006,"item6":3340,"kills":4,"deaths":6,"assists":3,"largestKillingSpree":0,"largestMultiKill":1,"killingSprees":0,"longestTimeSpentLiving":348,"doubleKills":0,"tripleKills":0,"quadraKills":0,"pentaKills":0,"unrealKills":0,"totalDamageDealt":77181,"magicDamageDealt":1207,"physicalDamageDealt":62175,"trueDamageDealt":13798,"largestCriticalStrike":0,"totalDamageDealtToChampions":12311,"magicDamageDealtToChampions":652,"physicalDamageDealtToChampions":10876,"trueDamageDealtToChampions":781,"totalHeal":3602,"totalUnitsHealed":1,"damageSelfMitigated":16691,"damageDealtToObjectives":3650,"damageDealtToTurrets":1165,"visionScore":23,"timeCCingOthers":19,"totalDamageTaken":23707,"magicalDamageTaken":7424,"physicalDamageTaken":14825,"trueDamageTaken":1457,"goldEarned":8762,"goldSpent":8425,"turretKills":1,"inhibitorKills":0,"totalMinionsKilled":134,"neutralMinionsKilled":8,"neutralMinionsKilledTeamJungle":4,"neutralMinionsKilledEnemyJungle":4,"totalTimeCrowdControlDealt":410,"champLevel":13,"visionWardsBoughtInGame":1,"sightWardsBoughtInGame":0,"wardsPlaced":9,"wardsKilled":2,"firstBloodKill":false,"firstBloodAssist":false,"firstTowerKill":false,"firstTowerAssist":false,"combatPlayerScore":0,"objectivePlayerScore":0,"totalPlayerScore":0,"totalScoreRank":0,"playerScore0":0,"playerScore1":0,"playerScore2":0,"playerScore3":0,"playerScore4":0,"playerScore5":0,"playerScore6":0,"playerScore7":0,"playerScore8":0,"playerScore9":0,"perk0":8005,"perk0Var1":1752,"perk0Var2":1294,"perk0Var3":458,"perk1":9111,"perk1Var1":488,"perk1Var2":140,"perk1Var3":0,"perk2":9104,"perk2Var1":15,"perk2Var2":40,"perk2Var3":0,"perk3":8014,"perk3Var1":195,"perk3Var2":0,"perk3Var3":0,"perk4":8473,"perk4Var1":668,"perk4Var2":0,"perk4Var3":0,"perk5":8444,"perk5Var1":1254,"perk5Var2":0,"perk5Var3":0,"perkPrimaryStyle":8000,"perkSubStyle":8400},"timeline":{"participantId":9,"creepsPerMinDeltas":{"10-20":6.1,"0-10":5.800000000000001},"xpPerMinDeltas":{"10-20":417.6,"0-10":464.4},"goldPerMinDeltas":{"10-20":394.5,"0-10":295.4},"damageTakenPerMinDeltas":{"10-20":1200.5,"0-10":624.3},"role":"SOLO","lane":"TOP"}},{"participantId":10,"teamId":200,"championId":101,"spell1Id":21,"spell2Id":4,"highestAchievedSeasonTier":"BRONZE","stats":{"participantId":10,"win":false,"item0":1056,"item1":3285,"item2":1026,"item3":3020,"item4":0,"item5":0,"item6":3340,"kills":2,"deaths":7,"assists":1,"largestKillingSpree":0,"largestMultiKill":1,"killingSprees":0,"longestTimeSpentLiving":492,"doubleKills":0,"tripleKills":0,"quadraKills":0,"pentaKills":0,"unrealKills":0,"totalDamageDealt":61073,"magicDamageDealt":49787,"physicalDamageDealt":8546,"trueDamageDealt":2740,"largestCriticalStrike":0,"totalDamageDealtToChampions":9645,"magicDamageDealtToChampions":9259,"physicalDamageDealtToChampions":385,"trueDamageDealtToChampions":0,"totalHeal":0,"totalUnitsHealed":0,"damageSelfMitigated":5347,"damageDealtToObjectives":637,"damageDealtToTurrets":637,"visionScore":8,"timeCCingOthers":22,"totalDamageTaken":12387,"magicalDamageTaken":6224,"physicalDamageTaken":5369,"trueDamageTaken":793,"goldEarned":6242,"goldSpent":5650,"turretKills":0,"inhibitorKills":0,"totalMinionsKilled":87,"neutralMinionsKilled":0,"neutralMinionsKilledTeamJungle":0,"neutralMinionsKilledEnemyJungle":0,"totalTimeCrowdControlDealt":186,"champLevel":11,"visionWardsBoughtInGame":0,"sightWardsBoughtInGame":0,"wardsPlaced":5,"wardsKilled":0,"firstBloodKill":false,"firstBloodAssist":false,"firstTowerKill":false,"firstTowerAssist":false,"combatPlayerScore":0,"objectivePlayerScore":0,"totalPlayerScore":0,"totalScoreRank":0,"playerScore0":0,"playerScore1":0,"playerScore2":0,"playerScore3":0,"playerScore4":0,"playerScore5":0,"playerScore6":0,"playerScore7":0,"playerScore8":0,"playerScore9":0,"perk0":8229,"perk0Var1":1065,"perk0Var2":0,"perk0Var3":0,"perk1":8226,"perk1Var1":250,"perk1Var2":568,"perk1Var3":0,"perk2":8233,"perk2Var1":13,"perk2Var2":40,"perk2Var3":0,"perk3":8236,"perk3Var1":24,"perk3Var2":0,"perk3Var3":0,"perk4":8321,"perk4Var1":4,"perk4Var2":0,"perk4Var3":0,"perk5":8347,"perk5Var1":0,"perk5Var2":0,"perk5Var3":0,"perkPrimaryStyle":8200,"perkSubStyle":8300},"timeline":{"participantId":10,"creepsPerMinDeltas":{"10-20":2.9,"0-10":4.5},"xpPerMinDeltas":{"10-20":254.9,"0-10":407.4},"goldPerMinDeltas":{"10-20":224,"0-10":189.7},"csDiffPerMinDeltas":{"10-20":-2.6999999999999997,"0-10":1},"xpDiffPerMinDeltas":{"10-20":-231.89999999999998,"0-10":60.80000000000001},"damageTakenPerMinDeltas":{"10-20":630,"0-10":281.79999999999995},"damageTakenDiffPerMinDeltas":{"10-20":110.70000000000002,"0-10":-131.4},"role":"SOLO","lane":"MIDDLE"}}],"participantIdentities":[{"participantId":1,"player":{"platformId":"NA1","accountId":44079456,"summonerName":"FACEMOB232","summonerId":29733451,"currentPlatformId":"NA1","currentAccountId":44079456,"matchHistoryUri":"/v1/stats/player_history/NA1/44079456","profileIcon":3163}},{"participantId":2,"player":{"platformId":"NA","accountId":39084313,"summonerName":"TheBeastly0ne","summonerId":24678415,"currentPlatformId":"NA1","currentAccountId":39084313,"matchHistoryUri":"/v1/stats/player_history/NA/39084313","profileIcon":3583}},{"participantId":3,"player":{"platformId":"NA1","accountId":203130948,"summonerName":"oTTC","summonerId":40192622,"currentPlatformId":"NA1","currentAccountId":203130948,"matchHistoryUri":"/v1/stats/player_history/NA1/203130948","profileIcon":3262}},{"participantId":4,"player":{"platformId":"NA1","accountId":203102480,"summonerName":"dwrecker212","summonerId":40102181,"currentPlatformId":"NA1","currentAccountId":203102480,"matchHistoryUri":"/v1/stats/player_history/NA1/203102480","profileIcon":908}},{"participantId":5,"player":{"platformId":"NA1","accountId":213955224,"summonerName":"AllHailTheKraken","summonerId":51053544,"currentPlatformId":"NA1","currentAccountId":213955224,"matchHistoryUri":"/v1/stats/player_history/NA1/213955224","profileIcon":3440}},{"participantId":6,"player":{"platformId":"NA1","accountId":211968716,"summonerName":"shuanspinstar","summonerId":49102019,"currentPlatformId":"NA1","currentAccountId":211968716,"matchHistoryUri":"/v1/stats/player_history/NA1/211968716","profileIcon":3008}},{"participantId":7,"player":{"platformId":"NA1","accountId":240407428,"summonerName":"LadySeagull","summonerId":89240491,"currentPlatformId":"NA1","currentAccountId":240407428,"matchHistoryUri":"/v1/stats/player_history/NA1/240407428","profileIcon":3632}},{"participantId":8,"player":{"platformId":"NA1","accountId":207802496,"summonerName":"I Fake News I","summonerId":45049198,"currentPlatformId":"NA1","currentAccountId":207802496,"matchHistoryUri":"/v1/stats/player_history/NA1/207802496","profileIcon":2076}},{"participantId":9,"player":{"platformId":"NA1","accountId":237817788,"summonerName":"CloudSurfer465","summonerId":85440584,"currentPlatformId":"NA1","currentAccountId":237817788,"matchHistoryUri":"/v1/stats/player_history/NA1/237817788","profileIcon":3613}},{"participantId":10,"player":{"platformId":"NA","accountId":38171360,"summonerName":"månıáçŁÅTIN","summonerId":23952219,"currentPlatformId":"NA1","currentAccountId":38171360,"matchHistoryUri":"/v1/stats/player_history/NA/38171360","profileIcon":3587}}]},
            playerID: 3,
            playerName: 'Name'

        }
    }
    componentWillMount(){
        var id = window.location.href.slice(-10);
        console.log(id)
        fetch('https://na1.api.riotgames.com/lol/match/v3/matches/'+ id +'?api_key=RGAPI-437c45d2-21d3-4c80-9e7e-28a6289fe07f')
        .then(response => response.json())
        .then(response => this.setState({matchDataFull: response}))
    }

    render() {
        let r = this.state.matchDataFull;
        let lWin = '';
        let rWin = '';
        let lside = [];
        let lindex = [];
        let rside = [];
        let rindex = [];
        let pID = this.state.playerID;

        if(r.teams[0].win == 'Win'){
            lWin = 'Victor';
            rWin = 'Defeated';
        }
        else{
            lWin = 'Defeated';
            rWin = 'Victor';
        }

        console.log(r.participants[0].teamId)
        for(let i=0; i<10; i++){
            if (r.participants[i].teamId == '100'){
                lside.push(r.participants[i].participantId);
                lindex.push(i);
            }
            else{
                rside.push(r.participants.participantId);
                rindex.push(i);
            }
        }
        
        let player1l = r.participants[lindex[0]]
        let player2l = r.participants[lindex[1]]
        let player3l = r.participants[lindex[2]]
        let player4l = r.participants[lindex[3]]
        let player5l = r.participants[lindex[4]]
        let player1r = r.participants[lindex[0]]
        let player2r = r.participants[lindex[1]]
        let player3r = r.participants[lindex[2]]
        let player4r = r.participants[lindex[3]]
        let player5r = r.participants[lindex[4]]

        return (
            <span>
                <div className='teams'>
                    <div className='teamSide left'>
                        <div className='teamContainer left'>
                            <p className='WL left'>{lWin}</p>
                            <div className='team left'>
                                <div onClick={() =>  this.setState({playerID:lindex[0], playerName:r.participantIdentities[lindex[0]].player.summonerName})} className='player left'>
                                    lvl{player1l.stats.champLevel} | {r.participantIdentities[lindex[0]].player.summonerName} | {player1l.timeline.lane}
                                </div>
                                <div onClick={() =>  this.setState({playerID:lindex[1], playerName:r.participantIdentities[lindex[1]].player.summonerName})}className='player left'>
                                    lvl{player2l.stats.champLevel} | {r.participantIdentities[lindex[1]].player.summonerName} | {player2l.timeline.lane}
                                </div>
                                <div onClick={() =>  this.setState({playerID:lindex[2], playerName:r.participantIdentities[lindex[2]].player.summonerName})}className='player left'>
                                    lvl{player3l.stats.champLevel} | {r.participantIdentities[lindex[2]].player.summonerName} | {player3l.timeline.lane}
                                </div>
                                <div onClick={() =>  this.setState({playerID:lindex[3], playerName:r.participantIdentities[lindex[3]].player.summonerName})}className='player left'>
                                    lvl{player4l.stats.champLevel} | {r.participantIdentities[lindex[3]].player.summonerName} | {player4l.timeline.lane}
                                </div>
                                <div onClick={() =>  this.setState({playerID:lindex[4], playerName:r.participantIdentities[lindex[4]].player.summonerName})}className='player left'>
                                    lvl{player5l.stats.champLevel} | {r.participantIdentities[lindex[4]].player.summonerName} | {player5l.timeline.lane}
                                </div>
                            </div>
                        </div>
                        <div className='teamStats left'>
                            <div className='firstTower left'>{r.teams[0].first}</div>
                            <div className='firstDragon left'></div>
                            <div className='firstBaron left'></div>
                            <div className='firstRift left'></div>
                            <div className='firstBlood left'></div>
                            <div className='teamKDA left'></div>
                        </div>
                    </div>
                    <div className='mitigator'></div>
                    <div className='teamSide right'>
                        <p className='WL right'>{rWin}</p>

                        <div className='teamContainer right'>
                            <div className='team right'>
                                <div onClick={() =>  this.setState({playerID:rindex[0], playerName:r.participantIdentities[rindex[0]].player.summonerName})} className='player right'>
                                    lvl{player1r.stats.champLevel} | {r.participantIdentities[rindex[0]].player.summonerName} | {player1r.timeline.lane}
                                </div>
                                <div onClick={() =>  this.setState({playerID:rindex[1], playerName:r.participantIdentities[rindex[1]].player.summonerName})} className='player right'>
                                    lvl{player2r.stats.champLevel} | {r.participantIdentities[rindex[1]].player.summonerName} | {player2r.timeline.lane}
                                </div>
                                <div onClick={() =>  this.setState({playerID:rindex[2], playerName:r.participantIdentities[rindex[2]].player.summonerName})} className='player right'>
                                    lvl{player3r.stats.champLevel} | {r.participantIdentities[rindex[2]].player.summonerName} | {player3r.timeline.lane}
                                </div>
                                <div onClick={() =>  this.setState({playerID:rindex[3], playerName:r.participantIdentities[rindex[3]].player.summonerName})} className='player right'>
                                    lvl{player4r.stats.champLevel} | {r.participantIdentities[rindex[3]].player.summonerName} | {player4r.timeline.lane}
                                </div>
                                <div onClick={() =>  this.setState({playerID:rindex[4], playerName:r.participantIdentities[rindex[4]].player.summonerName})} className='player right'>
                                    lvl{player5r.stats.champLevel} | {r.participantIdentities[rindex[4]].player.summonerName} | {player5r.timeline.lane}
                                </div>
                            </div>
                        </div>
                        <div className='teamStats right'>
                            <div className='firstTower right'></div>
                            <div className='firstDragon right'></div>
                            <div className='firstBaron right'></div>
                            <div className='firstRift right'></div>
                            <div className='firstBlood right'></div>
                            <div className='teamKDA right'></div>
                        </div>
                    </div>
                </div>
                <div className='solo'>
                    <div className='soloTitle'>
                        <h1 className='soloTitlePiece'>{this.state.playerName}</h1>
                        <h1 className='soloTitlePiece'>{r.participants[pID].stats.kills}/{r.participants[pID].stats.deaths}/{r.participants[pID].stats.assists}</h1>
                    </div>
                    <div className='soloStats'>
                        <div className='section'>
                            <l>Damage Done(to champions):</l>
                            <p className='soloStatPiece'>Magic: {r.participants[pID].stats.magicDamageDealtToChampions}</p>
                            <p className='soloStatPiece'>Pysical: {r.participants[pID].stats.physicalDamageDealtToChampions}</p>
                            <p className='soloStatPiece'>True: {r.participants[pID].stats.trueDamageDealtToChampions}</p>
                            <p className='soloStatPiece'>TOTAL: {r.participants[pID].stats.totalDamageDealtToChampions}</p>
                            <l>Gold:</l>
                            <p className='soloStatPiece'>Earned: {r.participants[pID].stats.goldEarned}</p>
                            <p className='soloStatPiece'>Spent: {r.participants[pID].stats.goldSpent}</p>
                        </div>
                        <div className='section'>
                            <l>Efficiency(eary game):</l>
                            <p className='soloStatPiece'>Gold/min: {r.participants[pID].timeline.goldPerMinDeltas["0-10"]}</p>
                            <p className='soloStatPiece'>Creeps/min: {r.participants[pID].timeline.creepsPerMinDeltas["0-10"]}</p>
                            <p className='soloStatPiece'>Xp/min: {r.participants[pID].timeline.xpPerMinDeltas["0-10"]}</p>
                            <l>Efficiency(late game):</l>
                            <p className='soloStatPiece'>Gold/min: {r.participants[pID].timeline.goldPerMinDeltas["10-20"]}</p>
                            <p className='soloStatPiece'>Creeps/min: {r.participants[pID].timeline.creepsPerMinDeltas["10-20"]}</p>
                            <p className='soloStatPiece'>Xp/min: {r.participants[pID].timeline.xpPerMinDeltas["10-20"]}</p>
                        </div >
                        <div className='section'>
                            <l>Other: </l>
                            <p className='soloStatPiece'>Turret Kills: {r.participants[pID].stats.turretKills}</p>
                            <p className='soloStatPiece'>Objective Score: {r.participants[pID].stats.objectivePlayerScore}</p>
                            <p className='soloStatPiece'>Wards Placed: {r.participants[pID].stats.wardsPlaced}</p>
                            {/* <p className='soloStatPiece'>Wards Killed: {r.participants[pID].stats.wardsKilled}</p> */}
                            <p className='soloStatPiece'>Total Minion Score: {r.participants[pID].stats.totalMinionsKilled}</p>
                            {/* <p className='soloStatPiece'>Total time CC dealt: {r.participants[pID].stats.totalTimeCrowdControlDealt}seconds</p> */}
                            <p className='soloStatPiece'>Damage Mitigated: {r.participants[pID].stats.damageSelfMitigated}</p>                            
                            <p className='soloStatPiece'>Damage Healed: {r.participants[pID].stats.totalHeal}</p>
                            <p className='soloStatPiece'>Damage Taken: {r.participants[pID].stats.totalDamageTaken}</p>
                        </div>
                    </div>
                </div>
                <Link to={`/search`}>
                    <div className='back'>BACK</div>
                </Link>  
            </span>
        );
    }
}
export default Match
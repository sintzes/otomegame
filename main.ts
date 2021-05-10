function Script () {
    game.showLongText("Lisa: *yawn* If you're borrowing a book, please register it in the log. The restricted section is currently not lending any books...", DialogLayout.Bottom)
    game.showLongText("Lisa: Oh? It's you, little cutie.", DialogLayout.Bottom)
    game.showLongText("Lisa: It's so good to see you! More refreshing than a strong cup of tea in the afternoon.", DialogLayout.Bottom)
    game.showLongText("Y/N: Clearly you're meant to be working, but you don't seem to have your heart in it at all...", DialogLayout.Bottom)
    game.showLongText("Lisa: I mean, other than Jean, who really works that earnestly anyways?", DialogLayout.Bottom)
    game.showLongText("Y/N: Others work hard too!", DialogLayout.Bottom)
    game.splash("I do feel sorry for Jean always working so hard...")
    game.showLongText("Lisa: So did you have something you needed?...Or did you just come to see me?", DialogLayout.Bottom)
    game.showLongText("Y/N: I just wanted to see you!", DialogLayout.Bottom)
}
let lisa = sprites.create(img`
    ......bbcccccccccccccccccccccccccccffffccb11dbdd1ddbbcfcbbbccbbbbbbbbbbbbbbbbcff
    ........cfcccccccccccccccfcccccccfffcfffffcbbbd1111cffcbdbbcfcfbbbbbbbbbbbbbbbcf
    .......bffffffccccccccccccccccccccfffcfffffccbdd111dcbdddbbcffcbbbbbbbbbbbbbbbbc
    .......cffffffcccccccccccccccccffffffffffccccddd111dbdddddbbcfcbbbbbbbbbbbbbbbbb
    ......bffffffffcccaaccccccccffffffcccccccccccd1dddddddddddbbbbbbbbbbbbbbbbbbbbbb
    ......cfffffffffccabccccccfffffffffcccfcfcffc11ddcbddddddddbbbbbbbbdbbbbbbbbbbbc
    .....bcffffffffffccbbccccffffffffffcbccccfccd11ddbdddddddddddbbbdddddbbbbbbbbbbf
    .....ccfffffffffffccbccfffffffffcfffcccfcbddd11bbddddddddddddddbbbbbddbbbbbbbbcf
    ....bcccffffffccffccbcfffffffffffffcffccbdddb1dbddddddddddddddbbbbbbbdbdbbbbbbff
    ...bcccccffffcccccfccfffffffcffffffcfcccddd11dbdddddddddddddddbbccbbbbbbbbbbbcff
    ...ccccaccffcbccc8fccccffffffffffccbbccd1bd11ddddddddddddddddbbcffbbbbbbbbbbffff
    ..bccccbbcffcddbccccaaacfffffffcbdddddd1dcb11ddddddddddddddddbbcfffcbdddddcfffff
    .bccccbdddcfcbdddccaaaaafffffcb11dd11d11dbbddbbbdddddddddddddbbcfccbbbbdddbfffff
    .ccccbddddbcfccbddcaaa8affffbd11dbd11dbbbbcccccccbdddddddddddbbccbbbbbbbbdbcffff
    bccccbdddbbcfcaccbccaa8cfffcbddbbbd111bffffcccccccbdddddddddddbbbbbbbddbbbdbffff
    cccccbdbbbcccaaabacc8a8cffffccccccb1d1bffffccccccccbdddddddddddbbbbddddbbbdbcfff
    ccccccccccccba8aa8aaaa8ccfffcccccccccccfffccffccccccbddddddddddddddddddbbbbdcfff
    bbbccccccccccc8aa8ca88accfffcccccccccffffcfffffffcccccbdddddbbbbbdddbbdbbbbdbfff
    ......cccccccccaacc88acacffccccccccfffffffeeeeeeffccccccddbbbbbbddddbbbbbbbdbfff
    ......cccffffccbaaaaa8aaffccccccccfffffffeeeeeeeeefccccccbbbccbdbddddbbbbdbbbfff
    .....cfffccccccabbaaaaacffccccccfffffffeeeeeeeeeeefcccccccbcffcdbddddbbbbbbbbffc
    b.bcffffcccccccaaaaaaccffcccccffffffffeeeeeedeeedeefccccccccffcddbbbdbbbbbbbcffb
    bbcfffffccccccccaaaccffcccccfffffffffeeeeefdddeeddefcffccccccccbddbbbbbbdbbcffc.
    cfcccfffccccccccaaacfffffffffffffffeeedeefeeeeeeeeefcfefccccbdddddddddbbccffff..
    ffcbcffffcfccccccccfffffffffffffffefeeeefeeeeeeeeeefcffefccccbdbdbbccccffffffc..
    fffffffffffffffccccfffffffffffffeeffeeeeeeeeeeeeeeeffffeefcccbdddbcffffffffffb..
    fffffffffffffffcccffffffffffffeeeefeeeefeeeeefeeeeeffffeeefccbddddcfffffffffc...
    ffffffffffffffffcffffccffffeeeefeefffffedeeeefefeeeffffeeefcccbbddcfffffffcc....
    .ccccccfffffffffffffcccffffeeeefeeeffeeddeeeefefeeeffffeeeefccbbbdcffffccccb....
    ......bfffffffffffcccffffffefeefeeefeeeddeeeffffeeefffffeeeefccbddccccccccc.....
    .......cffffffffffccccfffffeffffefeeedd11eeeffffeeffeeffeeeffccbddccccccc.......
    ........fffffffcffcccfffffefeeeffeeeeddddeeefffeeeffedffefefffccbbccccccc.......
    ........cfffffffffffffffffefeeeefeffcccfffe1fffeeffeddefeeeffcccccccccc.........
    ........cffffffffffffffffeeeeefeeffbcfffff11ffeeeffeeeefeefecccbccccccc.........
    ......bcffffffffffffffffeefeeefefffcccccbfb1efeeffe111efeeffcccccccccc..........
    ......cffcccffffffffffffeeeeeeffefbb777cdb11feefe111111ffefcccccccccb...........
    .....bfffcbcffffffffffcfeeeeeeefef111771111eeefe11beeb1ffeeccccccccb............
    ....bffffcbcfffffffffcdfefeeeeefef111111111fee1111bfcffffeeccccccb..............
    ....ffffffccfffffffff11fefeeeeefffe1111111ee11111be77efffeecccccb...............
    .bcfffffffffffffffffed1feffeeeeeffe11111111111111dbbbbffffefcbb.................
    dcffffffffffffffffffe11feefeeeeefff1111111111111111111fcffefef..................
    cffffffffffffffffffeee1feffeeefeefef11111111111d111111ccffefef..................
    ffffffffffffffccfeeeeee1eefeeeefeeef11111111111d111111cbbfeeef..................
    ffffffffffffcbbfeeeeeeeefeefeeeefffe111111111111111111b..fffef...............dd1
    fffffffffccbbbfeeeeeeeeeeeeffeeeeffce11111111111111111...ffeef.............ddd11
    fffffffcbbbbbbfeeeeeeeeeeeeeffefeefd11111111111111111b...ffeef............1dd11d
    fffffcbbbbdbddfeeeeeeeeeeeeefffffeeed1111111111111111b...ceeef............dd1ddd
    ffffcbbbbdbddfeeeeefeeeeeffeefffffeeeed1111ddddd1111bceeeeeedf............11dddd
    fccbbbbbbdbddfeeeeeeefeefffeffffffffeefeeb1111111dddbdeeeeedf...........b1dddddb
    cbbbbbbbdddddfeeeeefffeeefffffffffffffffee1111111dceceeeeeef.......bbb.b1ddddddb
    bbbbbbbbcddddfeeeeeeeeeeeeeffffbbbbbbbdd1111111111eeeeeeeef..bbcccccccb1ddddddb.
    bbbbbccccbdddfeeeeeeeeeeeedddeeffbdddd11111111111dedeeeeeef..ccccccccd1dddddbb..
    ccccccccccbddfeeeeeeeeeeeeeeeeeefffdddd111111111dbddddecef..bccccccbdddbbbbb....
    cccccccccccdddffeeeffeeeeeeeeeeeffffdbbdd111111dbd1ddeed....ccccccbddbccc.......
    ccccccccccccbbbffeeeeeeeeeedeeeeeefffefffbdd11dbbd111dd....ccccfcbbccffffb......
    cccccccccccccccccfeeeeeeeeeeeeeeeeefeffffffeeeeffb........ccccfcbcffcfffccd.....
    ccccccccccccccccccfeeeeeeddeeeeeeeeefffffffeefffffcbbd...bccfeeccfffccfffcc.....
    ccccccccccccccccccfeeeeeddeeeeeeeffecffffffeefcffffcc.....beeefffffccccfffc.....
    cccccccccccccccccccfeeeeeeefffffeeffcfffffcccbbccffccc...bbeecfffffccccffffc....
    ..ccccccccccccccccccccfeeffffccfffffcfcfcfccbbbccffccccbebefccfffffcfccffffccd..
    ..............ccccccccccccccccfcfffcfffcffcbccbbcccccccccfffffffffcccccccccccb..
    ..............cccccccccccccccffffffcffffffcbb111111cccccbfffffffffffffcccfffcc..
    .............ccccccccccccccfffffcffcfffffcb111111111bccc.bbbbcfffffcffffffffffc.
    .............ccccccccccccccffffccccfffffcb11111111111ccc.....bfffffcccfffffffffc
    .............ccccccccccccffffffcccffffcbb111111111111bcc......bcffcccfffffffffff
    .............ccccccfccffffffffffccfffcbb11111111111111cccb......cfccffffffffffff
    .............bccccffffffffffcccccfffcbb111111111111111ccbcc......bbbccffffffffff
    ............bbcccfffffffffcccfcffffcbbb1111111111111111bccccb........bffffffffff
    .............bbccffffffccccccccfffcbbbb1111111111111111cbcccc........bcfffffffff
    ............bbbccffffccccccccccfcfcbbbbb111111111111111bbcccfc........cfffffffff
    ...........bbbcccccccccccccccccccfcccbbb111111111111111bccccffcb......cccfffffff
    ...........bbccccccccccccccccccccccccccbb111111111111111ccccffc......bccffffffff
    ..........bccccccccccccccccccccccccccccccbb1111111111111ccfffcb......bcccffffffc
    ..........bcccccccccbcccccccccccccccccccccbbbbbb1111111cccccccc.....dcccbcfcfff.
    ..........bccccccccbbbccccccccccbccccccccccccbbbbbbbbbcccccfcccb....bcbbccccccc.
    ..........bcccccccbddbbccccccccbbbccccccccccccccccbbbccccccccccb...dcccbcfccccc.
    .........bbccccccbd1dbcccccccccbddcccccccccccccccccbccccbcccccbbb..bbcbbfffcccf.
    .........bcccccccbd1dbccccccccbddddccccccccccccbcccccccbbbcccccbbbbcbcccccccccf.
    ........bbccccccccddbcccccccccbddddbccccccccccccccbbbbbbbbccccccbcbbbccccccfccc.
    ........bcccccccccbbbbccccccccdddd1dcccccccccccccbbbbbbbbcccccccccccbbbbcccffcc.
    ........bcccccccbcbbcbcccccccbdddd1dcccccccccbcbbbbbbbbbbbcbccccbcccbbbbccccccc.
    ........bcccccccbcbbbbcccccccbdddd11cccccccccbbbbbbbbbbbbbccbcccbbbccccccccbccc.
    .......bccccccccbbcbbccccccccbdddd11bccccccccbbbbbbbbbbbbbcccccbccccbbbcccbdbcc.
    .......bccccccbbbccbbccccccccbbdbbbdbccccccccbbbbbbbbbbbbbbbbbccbcbbddddbdddbc..
    ......bccccccbbbbbcbbccccccccccbbbbbcccccccccbbbbbbbbbbbbbbbbbcbbcbdddddddddcb..
    .....dcccccbcbbbdbbdbccccccccccccbbbccccccccbbbbbbbbbbbbbbbbbcbbbcbdddddddddc...
    ...d.ccccccccbbcbcbdbbccccccccfffcccccccccccbbbbbbbbbbbbbbbbcbbbccddddddddddc...
    ....bccccccccccbbcbccbcccccccffffccfccccccccbbbbbbbbbddbbbbbbbbbcbddddddddddc...
    ...bccccccccccbdbbcccbcccccccffffccfccccccccbbbbbbbbbdddbbdbbbbbcdddddddddddc...
    ..dccbccccccbbddcbccccbcccccfffffccfccccccccbbbbbbbdbddbbd1dbbbccbddddddddddb...
    .dcccbccccbbcbdbcbccccbcccccfffffcfccccccccbbbbbdcddbbbbdddbbbbbbcbdddddddddb...
    .cccbbcccbbbdbdbbbccccbcccccfffffffcccffcbccbbbddbd1dbbddbbbbbbbbbcbbddddddc....
    bccbddbbbbbd.bdcbbccccbccccffffffffccffccbbcbbbddbd11ddbbbbbbdbbbbbccbbddddc....
    ccbddddbccd..bbbbbccccbbcccfffffffccccfccbbbbbdddb11dddbbbbbbdddbbbccbdddddc....
    ccbbbbbccb...bcbcbccccbbccffffffffccccfccbbbbdbbb1d11dbbbbbbbcbbbcccbddddddc....
    cbccbbcbb....dcbcdccccbbccffffffffcccfffcccbbddddd11bbbdbbbbcbbcbbbdddddddbb....
    cccbcccbd....dbccdbccbdcccffffffffffffcffccbbbbbbbbbbd1111bbcbdbbdddddddddc.....
    cbbcccbd.....bbccbdbbddcccfffffffffcccccffffccbbbbbdd11111bbcddbbdddddddddc.....
    bccccbb......bbcccbdddbcccffffffffccccccffffffbbd11bd1111ddcbdddbbddddddddc.....
    ccccbb......dbccccccbdccccffffffffcccccccffffcbd11bbbbbdddbbdddddbddddddddc.....
    cccbbb......bbcccbccbdcccccfffffffccccccccfffbdddbbdddbbbbbddd1ddbbdddddddb.....
    cccbb......dbccccbcccbcccccfffffffcccccccccfcbbbccdddddddddddd1ddbbdddddddb.....
    ccbb.......bbccccbccccccccccfffffccccccccccfffffffbddd111ddddd11dbbddddddcb.....
    ccb........bbccccbccccccccccfffffccccccccccfffffffcddd1111111111dbbddddddc......
    bbb.......dbcccccbbcccccccccfffffccccccccccfffffffcddd11111111111dbddddddc......
    .b........bbcccccdbcccccccccffffffccccccccccfffffccddd11111111111ddddddddb......
    b.........bdcccccddccccccfcccfffffcccccccccccfffcbbddd11111111111dddddddc.......
    b........dbdccccbbdbcccccfcccfffffcccccccccccfffcbbddd11111111111dddddddc.......
    .........bdddbcbdbbbcccccfcccfffffccccccccccccfffcbbbbd1111111111ddddddc........
    .........bdbbdddbccdcccccccfccfffffccccccccccccfcbccccb1111111111ddddbc.........
    ........dbbccbdbcccbbccccccfccfffffcccccccccccccbcfccccd111111111ddddb..........
    ........dbcccbdccccbbcccccccfccffffccccccccccccbbcfccccbd1111111ddddb...........
    ........bbcccbbccccbbccccccccccffffcccccccccccddbffcccccd1111111dddd............
    `, SpriteKind.Player)
let yn = sprites.create(img`
    ....................eeeeeeeeeeeeeeeeeeeeeeee....................
    ..................eeeeeeeeeeeeeeeeeeeeeeeeeeeee.................
    .................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee................
    ................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee...............
    ...............eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.............
    ..............eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee............
    .............eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee...........
    ............eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..........
    ...........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.........
    ..........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........
    ..........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.......
    ..........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.......
    .........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.......
    ..........e1eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee......
    .........eeeeeeeeeeee1eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee......
    ........eeeeeeeeeee111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee......
    ........eeeee11ee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee......
    ........eeeee1eee11e11eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.....
    ........eeeeeeee11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.....
    .......eeeeeeeeeee1e1ee1111ee1eeeeeeeeeeeeeeeeeeeeeeeeeeeee.....
    .......eeeeeeeeeee1e1ee1111ee111eeeeeeeeeeeeeeeeeeeeeeeeeee.....
    .......eeeeeeeeeeeee1ee1111ee1111eeeeee1eeeeeeeeeeeeeeeeeee.....
    ........eeeeeeeeeeeeee11111e11111eeeeee1eeeeeeeeeeeeeeeeeee.....
    ........eeeeeeeeeeeeeeeeeeeeeeeeeee111e1eeeeeeeeeeeeeeeeeee.....
    .......eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee....
    .......eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee....
    .......eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebeeeeeeeee....
    .......eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee....
    .......eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbeebbeeeee.....
    .......eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbebbbeeee......
    .......eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbeebbeeeee......
    .......eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebeebbebdbeeee.......
    .......eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbddbee.........
    .......eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbeeebdd1dbee.........
    .......eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbd1d1ddbb..........
    .......eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebd1dd11111dd11.........
    .......eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebd1111111111111.........
    .......eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed111111111111111........
    .......eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeb1111111111111111........
    .......eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeb1111111111111111........
    .......eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebb111111111111111.........
    .......eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedb11111111111111..........
    .......eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedd11111111111111..........
    .......eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed1111111ddddd11...........
    .......eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111111111111............
    .......eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111111111111............
    .......eeeeeeeeeeeeeeeeeeeeeeeeeefeeee11111111111111............
    .......eeeeeeeeefeeeeeeeeeefeeeeefceee1111111111111.............
    .......eeeeeeeeefeeeeeeeeeefeeeeffceee1111111111111.............
    .......eefeeeeeefeeeeeeeeeefceeeffceeed11111111111..............
    .......ecfceeeeefccfeeeeecefceecffceceddd111111111..............
    ......eecffeeeeefccffeeeeefffeefffeeeeeebdd1111111..............
    ......ecfffeeeeefccffeceeefffeefffeeceeeecebdd111...............
    ......ecffeeeeeffccfeceeeffffeeffeeeceeeecccebb.................
    ......ecffeeeeffccffeeeeefffeeeffeeeceeeccccccc.................
    .....becfeeeeeffccffeeeeffffeeeffeeeceeeccccccc.................
    .....becfeeeefffcfffeeecffffeeefffeeccceeceeeec.................
    .....befeeeeffffffffeefcfffceeefffeeccceeceeeee.................
    ....beefeeeefffcfffeeefcffeeeeeffceecccececeeec.................
    ....beefeeeffffcfffeefcffeeeeeeffceeccccceceeec.................
    ...bbecfeeefffecffeeefcfeeeeeeeffeeeeccececebeb.................
    ...bbecfeefffeeffeeefcfeeeeeeeeffceeecccceccbbb.................
    ...becfeefffeecfeeeffceeebeeeeeefeeeeecccbcbdbb.................
    ..bbeceefeeeecfeeeffffeebbeeeeeefeeeebbccccbdbb.................
    bbbeceefffcccfeecffffeeedbeeeeebfeeeebdbccfcbbb.................
    bbeccefffccceecffffeeeebdeeeeeebeeeeed1dbcfffcc.................
    beccfffcccceefffffeceebddeeeeeebeeeeed11dbc888f81...............
    ecfffcffffffffffcecceebdbeeeeeedeeeeeb111dc8888881..............
    fffffcccfccffffceccebbdbeeeeeeedeeeeebd111b88888811.............
    ffffffffcceecffccbbbbddbeeeeeebdeeeeebd111db88888111............
    cffff8fffceeecffcbbbbdbeeeeeeebdeeeeebd1111d888881111...........
    fff888888ffeeeccfcbbdbbeeeeeeed1eeeeebdd1111b88888111...........
    f888888888888eeeccbbbeeeeeeeebbdbeeeebdd1111d888881111..........
    88888888888888eeeeeeeeeeeeeeebbdbeeeebdd11111b88881111..........
    8888888888888888eeeeeeeeeeeebdbdbeeeebddd1111d88881111..........
    88888888888888888eeeeeeeeeeedbbddeeeedddd11111b88881111.........
    88888888888888888888eeccceeddbdddeeeedd1d11111db8881111.........
    88888888888888888888fffccbd1dbdddeeeebd1d111111b88811111........
    88888888888888888888fffcd111dddddeeeedddd111111db8811111.1......
    88888888888888888888cffcb11ddddddeeeedd1dd111111b8881111.1......
    8888888888888888888888fccddddddddeeeedd1dd111111b8881111.1......
    8888888888888888888888cfccbd1ddddeeeedd11bbd1111b8881111.1......
    88888888888888888888888ccccd1ddddeeeedd1dbbbdddbb888111111......
    888888888888888888888888ccccdddddeeeedd1dbbbbbbbbb88111111......
    `, SpriteKind.Player)
controller.moveSprite(yn, 100, 100)
yn.setPosition(38, 43)
lisa.setPosition(122, 57)
Script()

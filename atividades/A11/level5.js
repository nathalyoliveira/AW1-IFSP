function init(robot) {

}

function loop(robot) {
    if ((360 < robot.info().x && robot.info().x < 500) || (550 < robot.info().x && robot.info().x < 700)) {
        robot.jump(10);
    } else {
        robot.move(40);
    }
}
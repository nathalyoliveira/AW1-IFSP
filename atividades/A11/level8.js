function init(robot) {
    robot.iterationsAfterCoin = 0;
}

function loop(robot) {
    if (robot.iterationsAfterCoin > 4) {
        robot.jump(10);
    }
    if (robot.info().coins > 0) {
        robot.iterationsAfterCoin++;
    }
}
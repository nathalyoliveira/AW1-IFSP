function init(robot) {

}

function loop(robot) {
    robot.move(40);
    if (robot.info().coins % 2 == 1) {
        robot.move(-40);
    }
}
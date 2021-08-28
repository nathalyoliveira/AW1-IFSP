function init(robot) {
	robot.oldCoins = 0;
	robot.oldEnergy = 100;
}

function loop(robot) {
	robot.move(40);
	if (robot.info().coins > robot.oldCoins ||
		 robot.info().energy > robot.oldEnergy) {
		robot.jump(10);
	}
	robot.oldCoins = robot.info().coins;
	robot.oldEnergy = robot.info().energy;
}
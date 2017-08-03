((state, timeLeftFn) => {
    const initialCommand = {
        command: { action: 'shoot', metadata: {} },
        state: {
            'previous-command': 'shoot'
        }
    }
    // const turnDirections = ['right', 'left', 'about-face'];
    // const turnDirection = turnDirections[Math.floor(Math.random() * 3)];

    // const smokeDirections = ['forward', 'backward', 'left', 'right', 'drop'];
    // const smokeDirection = smokeDirections[Math.floor(Math.random() * 5)];

    // const index = Math.floor(Math.random() * 17);

    // const command = index < 10 ?
    //     { action: 'move', metadata: {} } :
    //     index < 12 ?
    //         { action: 'turn', metadata: { direction: turnDirection } } :
    //         index < 16 ?
    //             { action: 'shoot', metadata: {} } :
    //             { action: 'smoke', metadata: { direction: smokeDirection } };
    const saveState = state["saved-state"];
    if (!saveState) {
        return initialCommand
    }
    const previousAction = saveState['previous-command'];
    const shoot = { action: 'shoot', metadata: {} };
    const turn = { action: 'turn', metadata: { direction: 'right' } };
    const smoke = { action: 'smoke', metadata: { direction: 'foward' } };
    let command;

    switch(previousAction) {
        case 'shoot':
            command = turn;
            break;
        case 'turn':
            command = smoke;
            break;
        case 'smoke':
            command = shoot;
            break;
        default:
            command = shoot;
    }

    return {
        command: command,
        state: {
            'previous-command': command['action']
        }
    };
});

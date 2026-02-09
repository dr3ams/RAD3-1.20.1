ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Args } = event;

    event.register(
        Commands.literal('mastery')
            .requires(s => s.hasPermission(2)) // Op only
            .then(Commands.literal('set')
                .then(Commands.argument('target', Args.PLAYER.create(event))
                    .then(Commands.argument('value', Args.INTEGER.create(event))
                        .executes(c => {
                            let target = Args.PLAYER.getResult(c, 'target');
                            let val = Args.INTEGER.getResult(c, 'value');
                            target.persistentData.putInt('ritual_mastery', val);
                            c.source.sendSuccess(Text.of(`Set ${target.username}'s Mastery to ${val}`), true);
                            return 1;
                        })
                    )
                )
            )
            .then(Commands.literal('reset')
                .then(Commands.argument('target', Args.PLAYER.create(event))
                    .executes(c => {
                        let target = Args.PLAYER.getResult(c, 'target');
                        target.persistentData.putInt('ritual_mastery', 0);
                        c.source.sendSuccess(Text.of(`Reset ${target.username}'s Mastery to 0`), true);
                        return 1;
                    })
                )
            )
    );
	
    event.register(
        Commands.literal('reset_astrolabe')
            .executes(ctx => {
                let player = ctx.source.player;
                player.persistentData.remove('astrolabe_busy');
                player.tell("Astrolabe state has been reset.");
                return 1;
            })
    );
});
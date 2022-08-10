console.time("Load time");

import { Parameters } from "./parameters";
import { PlayerCard } from "./playerCard";
import { SongCard } from "./songCard";
import { UI } from "./ui";
import { Plugins } from "./plugins";
import { Setup } from "./setup";

class Init {

    ////////////////////////////
    // PRIVATE CLASS VARIABLE //
    ////////////////////////////
    private _parameters: Parameters;
    private _playerCard: PlayerCard;
    private _songCard: SongCard;
    private _ui: UI;
    private _plugins: Plugins;

    constructor() {
        this._parameters = Parameters.Instance;
        this._playerCard = PlayerCard.Instance;
        this._songCard = SongCard.Instance;
        this._ui = new UI();
        this._plugins = Plugins.Instance;
        new Setup();

        (async () => {
            await this.appInit();

            console.timeEnd("Load time");
        })();
    }

    /////////////////////
    // PUBLIC FUNCTION //
    /////////////////////
    public async appInit() {
        await this._songCard.loadSkin(this._songCard.songCardParameters.skin);
        await this._playerCard.loadSkin(this._playerCard.playerCardParameters.skin);

        this._ui.refreshUI();
        this._plugins.beatSaberConnection();
    }
}

new Init();
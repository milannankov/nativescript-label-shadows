import { EventData } from 'data/observable';
import { Page } from 'ui/page';
declare var android;

export function onLoaded(args: EventData) {
    let page = <Page>args.object;

    setLabelShadow(page, "button1Label");
    setLabelShadow(page, "button2Label");
    setLabelShadow(page, "button3Label");
}

function setLabelShadow(page: any, labelId: string) {
    var label = page.getViewById(labelId);
    var radius = 4;
    var xOffset = 0.1;
    var yOffset = 1;
    var color = android.graphics.Color.parseColor("#7f7f7f");
    
    label.nativeView.setShadowLayer(radius, xOffset, yOffset, color);
}
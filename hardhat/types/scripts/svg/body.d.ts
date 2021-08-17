declare const fs: any;
declare const sealedClosedPortal: any;
declare const openPortal: any;
declare const body = "<g class=\"gotchi-body\"><g class=\"gotchi-primary\"><path d=\"M21 12h2v-2h-4v2h1z\"/><path d=\"M19 14v-2h-2v2h1zm6-4h2V8h-4v2h1z\"/><path d=\"M29 8h8V6H27v2h1zm16 6h2v-2h-2v1z\"/><path d=\"M48 14h-1v39h-2v2h4V14zm-11-4h4V8h-4v1z\"/><path d=\"M41 12h4v-2h-4v1zM17 53V14h-2v41h4v-2h-1z\"/><path d=\"M24 51h-5v2h5v-1z\"/><path d=\"M27 53h-3v2h5v-2h-1zm18-2h-5v2h5v-1z\"/><path d=\"M35 51h-6v2h6v-1z\"/><path d=\"M38 53h-3v2h5v-2h-1z\"/></g><g class=\"gotchi-secondary\"><path d=\"M18 43v6h2v-1h2v1h2v2h-5v2h-2V14h2v1h-1v26z\"/><path d=\"M27 51h-3v2h5v-2h-1zm11 0h-3v2h5v-2h-1z\"/><path d=\"M35 49h-2v-1h-2v1h-2v2h6v-1zM25 11h2v-1h-4v1h1zm-4 2h2v-1h-4v1h1zm24 31v5h-1v-1h-2v1h-2v2h5v2h2V14h-2v29z\"/><path d=\"M37 8H27v1h5v1h5V9zm8 4h-4v2h4v-1z\"/><path d=\"M41 10h-4v2h4v-1z\"/></g><path d=\"M44 14h-3v-2h-4v-2h-5V9h-5v2h-4v2h-4v2h-1v34h2v-1h2v1h2v2h5v-2h2v-1h2v1h2v2h5v-2h2v-1h2v1h1V14z\" fill=\"#fff\"/></g>";
declare const cheeks = "<path class=\"gotchi-cheek\" d=\"M21 32v2h2v-2h-1zm21 0h-1v2h2v-2z\"/>";
declare const mouth = "<g class=\"gotchi-primary-mouth\"><path d=\"M29 32h-2v2h2v-1z\"/><path d=\"M33 34h-4v2h6v-2h-1z\"/><path d=\"M36 32h-1v2h2v-2z\"/></g>";
declare const handsDownClosed = "<g class=\"gotchi-handsDownClosed\"><g class=\"gotchi-primary\"><path d=\"M19 42h1v1h-1zm1-6h1v1h-1z\"/><path d=\"M21 37h1v1h-1zm5 3v4h1v-4zm-5 3h-1v1h2v-1z\"/><path d=\"M24 44h-2v1h4v-1h-1zm1-5h-1v1h2v-1z\"/><path d=\"M23 38h-1v1h2v-1z\"/></g><g class=\"gotchi-secondary\"><path d=\"M19 43h1v1h-1zm5 2h-2v1h4v-1h-1z\"/><path d=\"M27 41v3h1v-3zm-6 3h-1v1h2v-1z\"/><path d=\"M26 44h1v1h-1zm-7-3h-1v2h1v-1z\"/></g><g class=\"gotchi-primary\"><path d=\"M44 42h1v1h-1zm-1-6h1v1h-1z\"/><path d=\"M42 37h1v1h-1z\"/><path d=\"M42 39v-1h-2v1h1zm0 4v1h2v-1h-1z\"/><path d=\"M40 44h-2v1h4v-1h-1z\"/><path d=\"M38 42v-2h-1v4h1v-1z\"/><path d=\"M40 40v-1h-2v1h1z\"/></g><g class=\"gotchi-secondary\"><path d=\"M42 44v1h2v-1h-1zm-5-2v-1h-1v3h1v-1z\"/><path d=\"M40 45h-2v1h4v-1h-1z\"/><path d=\"M37 44h1v1h-1zm7-1h1v1h-1z\"/></g></g>";
declare const handsDownOpen = "<g class=\"gotchi-handsDownOpen\"><g class=\"gotchi-primary\"><path d=\"M14 40h1v1h-1v-1zm-1-6h1v1h-1v-1z\"/><path d=\"M14 33h1v1h-1v-1zm-2 2h1v1h-1v-1zm-5 3h1v4H7v-4zm5 3h2v1h-2v-1z\"/><path d=\"M8 42h4v1H8v-1zm0-5h2v1H8v-1z\"/><path d=\"M10,36h2v1h-2V36z\"/></g><g class=\"gotchi-secondary\"><path d=\"M14,39h1v1h-1V39z\"/><path d=\"M12,40h2v1h-2V40z\"/><path d=\"M8,41h4v1H8V41z\"/></g><path d=\"M8,38v3h4v-1h2v-1h1v-5h-1v1h-1v1h-1v1h-2v1H8z\" fill=\"#fff\" /><g class=\"gotchi-primary\"><path d=\"M49 40h1v1h-1v-1zm1-6h1v1h-1v-1z\"/><path d=\"M49 33h1v1h-1v-1zm2 2h1v1h-1v-1zm5 3h1v4h-1v-4zm-6 3h2v1h-2v-1z\"/><path d=\"M52 42h4v1h-4v-1zm2-5h2v1h-2v-1z\"/><path d=\"M52,36h2v1h-2V36z\"/></g><g class=\"gotchi-secondary\"><path d=\"M49,39h1v1h-1V39z\"/><path d=\"M50,40h2v1h-2V40z\"/><path d=\"M52,41h4v1h-4V41z\"/></g><path d=\"M54,38v-1h-2v-1h-1v-1h-1v-1h-1v5h1v1h2v1h4v-3H54z\" fill=\"#fff\" /></g>";
declare const handsUp = "<g class=\"gotchi-handsUp\"><g class=\"gotchi-secondary\"><path d=\"M50,38h1v1h-1V38z\"/><path d=\"M49 39h1v1h-1v-1zm2-2h1v1h-1v-1z\"/><path d=\"M52,36h2v1h-2V36z\"/><path d=\"M54,35h2v1h-2V35z\"/></g><path d=\"M52,32v1h-2v1h-1v5h1v-1h1v-1h1v-1h2v-1h2v-3H52z\" fill=\"#fff\"/><g class=\"gotchi-primary\"><path d=\"M49,33h1v1h-1V33z\"/><path d=\"M50 32h2v1h-2v-1zm0 7h1v1h-1v-1z\"/><path d=\"M49 40h1v1h-1v-1zm2-2h1v1h-1v-1z\"/><path d=\"M52 37h2v1h-2v-1zm0-6h4v1h-4v-1z\"/><path d=\"M56,32h1v4h-1V32z\"/><path d=\"M54,36h2v1h-2V36z\"/></g><g class=\"gotchi-secondary\"><path d=\"M13,38h1v1h-1V38z\"/><path d=\"M14 39h1v1h-1v-1zm-2-2h1v1h-1v-1z\"/><path d=\"M10,36h2v1h-2V36z\"/><path d=\"M8,35h2v1H8V35z\"/></g><path d=\"M8,32v3h2v1h2v1h1v1h1v1h1v-5h-1v-1h-2v-1H8z\" fill=\"#fff\"/><g class=\"gotchi-primary\"><path d=\"M14,33h1v1h-1V33z\"/><path d=\"M12 32h2v1h-2v-1zm1 7h1v1h-1v-1z\"/><path d=\"M14 40h1v1h-1v-1zm-2-2h1v1h-1v-1z\"/><path d=\"M10 37h2v1h-2v-1zm-2-6h4v1H8v-1z\"/><path d=\"M7,32h1v4H7V32z\"/><path d=\"M8,36h2v1H8V36z\"/></g></g>";
declare const shadow = "<g class=\"gotchi-shadow\"><path opacity=\".25\" d=\"M25 58H19v1h1v1h24V59h1V58h-1z\" fill=\"#000\"/></g>";
declare const generatxorBody: string;
declare const hands: string;
declare const generatxorSvgs: any[];
//# sourceMappingURL=body.d.ts.map
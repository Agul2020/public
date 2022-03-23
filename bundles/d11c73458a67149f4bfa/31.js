(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1644:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return B}));var s,r=t(84),o=t.n(r),n=t(83),i=t.n(n),c=t(426),l=t.n(c),h=t(1),u=t(150),p=t(87),d=t(85),y=t(92),m=t(197),g=t(158),S=t(237),P=t(301),C=t(208),b=t(89),k=t(109),f=t(156),w=t(287),K=t(212),E=t(250),v=t(102),O=t(98),_=t(99),j=t(264);!function(e){e.Loading="loading",e.LoadError="load_error",e.ChooseKeyPassphrase="choose_key_passphrase",e.Migrate="migrate",e.Passphrase="passphrase",e.PassphraseConfirm="passphrase_confirm",e.ShowKey="show_key",e.Storing="storing",e.ConfirmSkip="confirm_skip"}(s||(s={}));class B extends i.a.PureComponent{constructor(e){let a;super(e),o()(this,"recoveryKey",void 0),o()(this,"backupKey",void 0),o()(this,"recoveryKeyNode",Object(n.createRef)()),o()(this,"passphraseField",Object(n.createRef)()),o()(this,"onKeyBackupStatusChange",()=>{this.state.phase===s.Migrate&&this.fetchBackupInfo()}),o()(this,"onKeyPassphraseChange",e=>{this.setState({passPhraseKeySelected:e.target.value})}),o()(this,"onChooseKeyPassphraseFormSubmit",async()=>{this.state.passPhraseKeySelected===K.a.Key?(this.recoveryKey=await p.a.get().createRecoveryKeyFromPassphrase(),this.setState({copied:!1,downloaded:!1,setPassphrase:!1,phase:s.ShowKey})):this.setState({copied:!1,downloaded:!1,phase:s.Passphrase})}),o()(this,"onMigrateFormSubmit",e=>{e.preventDefault(),this.state.backupSigStatus.usable?this.bootstrapSecretStorage():this.restoreBackup()}),o()(this,"onCopyClick",()=>{Object(g.b)(this.recoveryKeyNode.current)&&this.setState({copied:!0})}),o()(this,"onDownloadClick",()=>{const e=new Blob([this.recoveryKey.encodedPrivateKey],{type:"text/plain;charset=us-ascii"});l.a.saveAs(e,"security-key.txt"),this.setState({downloaded:!0})}),o()(this,"doBootstrapUIAuth",async e=>{if(this.state.canUploadKeysWithPasswordOnly&&this.state.accountPassword)await e({type:"m.login.password",identifier:{type:"m.id.user",user:p.a.get().getUserId()},user:p.a.get().getUserId(),password:this.state.accountPassword});else{const a={[S.c.PHASE_PREAUTH]:{title:Object(d.a)("Use Single Sign On to continue"),body:Object(d.a)("To continue, use Single Sign On to prove your identity."),continueText:Object(d.a)("Single Sign On"),continueKind:"primary"},[S.c.PHASE_POSTAUTH]:{title:Object(d.a)("Confirm encryption setup"),body:Object(d.a)("Click the button below to confirm setting up encryption."),continueText:Object(d.a)("Confirm"),continueKind:"primary"}},{finished:t}=y.a.createTrackedDialog("Cross-signing keys dialog","",j.a,{title:Object(d.a)("Setting up keys"),matrixClient:p.a.get(),makeRequest:e,aestheticsForStagePhases:{[S.c.LOGIN_TYPE]:a,[S.c.UNSTABLE_LOGIN_TYPE]:a}}),[s]=await t;if(!s)throw new Error("Cross-signing key upload auth canceled")}}),o()(this,"bootstrapSecretStorage",async()=>{this.setState({phase:s.Storing,error:null});const e=p.a.get(),{forceReset:a}=this.props;try{a?(h.a.log("Forcing secret storage reset"),await e.bootstrapSecretStorage({createSecretStorageKey:async()=>this.recoveryKey,setupNewKeyBackup:!0,setupNewSecretStorage:!0})):(await e.bootstrapCrossSigning({authUploadDeviceSigningKeys:this.doBootstrapUIAuth}),await e.bootstrapSecretStorage({createSecretStorageKey:async()=>this.recoveryKey,keyBackupInfo:this.state.backupInfo,setupNewKeyBackup:!this.state.backupInfo,getKeyBackupPassphrase:async()=>this.backupKey?this.backupKey:Object(m.e)()})),this.props.onFinished(!0)}catch(e){this.state.canUploadKeysWithPasswordOnly&&401===e.httpStatus&&e.data.flows?this.setState({accountPassword:"",accountPasswordCorrect:!1,phase:s.Migrate}):this.setState({error:e}),h.a.error("Error bootstrapping secret storage",e)}}),o()(this,"onCancel",()=>{this.props.onFinished(!1)}),o()(this,"restoreBackup",async()=>{const{finished:e}=y.a.createTrackedDialog("Restore Backup","",w.a,{showSummary:!1,keyCallback:e=>this.backupKey=e},null,!1,!1);await e;const{backupSigStatus:a}=await this.fetchBackupInfo();a.usable&&this.state.canUploadKeysWithPasswordOnly&&this.state.accountPassword&&this.bootstrapSecretStorage()}),o()(this,"onLoadRetryClick",()=>{this.setState({phase:s.Loading}),this.fetchBackupInfo()}),o()(this,"onShowKeyContinueClick",()=>{this.bootstrapSecretStorage()}),o()(this,"onCancelClick",()=>{this.setState({phase:s.ConfirmSkip})}),o()(this,"onGoBackClick",()=>{this.setState({phase:s.ChooseKeyPassphrase})}),o()(this,"onPassPhraseNextClick",async e=>{if(e.preventDefault(),this.passphraseField.current){if(await this.passphraseField.current.validate({allowEmpty:!1}),!this.passphraseField.current.state.valid)return this.passphraseField.current.focus(),void this.passphraseField.current.validate({allowEmpty:!1,focused:!0});this.setState({phase:s.PassphraseConfirm})}}),o()(this,"onPassPhraseConfirmNextClick",async e=>{e.preventDefault(),this.state.passPhrase===this.state.passPhraseConfirm&&(this.recoveryKey=await p.a.get().createRecoveryKeyFromPassphrase(this.state.passPhrase),this.setState({copied:!1,downloaded:!1,setPassphrase:!0,phase:s.ShowKey}))}),o()(this,"onSetAgainClick",()=>{this.setState({passPhrase:"",passPhraseValid:!1,passPhraseConfirm:"",phase:s.Passphrase})}),o()(this,"onPassPhraseValidate",e=>{this.setState({passPhraseValid:e.valid})}),o()(this,"onPassPhraseChange",e=>{this.setState({passPhrase:e.target.value})}),o()(this,"onPassPhraseConfirmChange",e=>{this.setState({passPhraseConfirm:e.target.value})}),o()(this,"onAccountPasswordChange",e=>{this.setState({accountPassword:e.target.value})});a=Object(K.d)().includes(K.a.Key)?K.a.Key:K.a.Passphrase;const t=e.accountPassword||"";let r=null;t?r=!0:this.queryKeyUploadAuth(),this.state={phase:s.Loading,passPhrase:"",passPhraseValid:!1,passPhraseConfirm:"",copied:!1,downloaded:!1,setPassphrase:!1,backupInfo:null,backupSigStatus:null,accountPasswordCorrect:null,canSkip:!Object(K.f)(),canUploadKeysWithPasswordOnly:r,passPhraseKeySelected:a,accountPassword:t},p.a.get().on(u.b.KeyBackupStatus,this.onKeyBackupStatusChange),this.getInitialPhase()}componentWillUnmount(){p.a.get().removeListener(u.b.KeyBackupStatus,this.onKeyBackupStatusChange)}getInitialPhase(){var e;const a=null===(e=E.a.createSecretStorageKey)||void 0===e?void 0:e.call(E.a);if(a)return h.a.log("Created key via customisations, jumping to bootstrap step"),this.recoveryKey={privateKey:a},void this.bootstrapSecretStorage();this.fetchBackupInfo()}async fetchBackupInfo(){try{const e=await p.a.get().getKeyBackupVersion(),a=p.a.get().isCryptoEnabled()&&await p.a.get().isKeyBackupTrusted(e),{forceReset:t}=this.props,r=e&&!t?s.Migrate:s.ChooseKeyPassphrase;return this.setState({phase:r,backupInfo:e,backupSigStatus:a}),{backupInfo:e,backupSigStatus:a}}catch(e){this.setState({phase:s.LoadError})}}async queryKeyUploadAuth(){try{await p.a.get().uploadDeviceSigningKeys(null,{}),h.a.log("uploadDeviceSigningKeys unexpectedly succeeded without UI auth!")}catch(e){if(!e.data||!e.data.flows)return void h.a.log("uploadDeviceSigningKeys advertised no flows!");const a=e.data.flows.some(e=>1===e.stages.length&&"m.login.password"===e.stages[0]);this.setState({canUploadKeysWithPasswordOnly:a})}}renderOptionKey(){return i.a.createElement(C.a,{key:K.a.Key,value:K.a.Key,name:"keyPassphrase",checked:this.state.passPhraseKeySelected===K.a.Key,onChange:this.onKeyPassphraseChange,outlined:!0},i.a.createElement("div",{className:"mx_CreateSecretStorageDialog_optionTitle"},i.a.createElement("span",{className:"mx_CreateSecretStorageDialog_optionIcon mx_CreateSecretStorageDialog_optionIcon_secureBackup"}),Object(d.a)("Generate a Security Key")),i.a.createElement("div",null,Object(d.a)("We'll generate a Security Key for you to store somewhere safe, like a password manager or a safe.")))}renderOptionPassphrase(){return i.a.createElement(C.a,{key:K.a.Passphrase,value:K.a.Passphrase,name:"keyPassphrase",checked:this.state.passPhraseKeySelected===K.a.Passphrase,onChange:this.onKeyPassphraseChange,outlined:!0},i.a.createElement("div",{className:"mx_CreateSecretStorageDialog_optionTitle"},i.a.createElement("span",{className:"mx_CreateSecretStorageDialog_optionIcon mx_CreateSecretStorageDialog_optionIcon_securePhrase"}),Object(d.a)("Enter a Security Phrase")),i.a.createElement("div",null,Object(d.a)("Use a secret phrase only you know, and optionally save a Security Key to use for backup.")))}renderPhaseChooseKeyPassphrase(){const e=Object(K.d)(),a=e.includes(K.a.Key)?this.renderOptionKey():null,t=e.includes(K.a.Passphrase)?this.renderOptionPassphrase():null;return i.a.createElement("form",{onSubmit:this.onChooseKeyPassphraseFormSubmit},i.a.createElement("p",{className:"mx_CreateSecretStorageDialog_centeredBody"},Object(d.a)("Safeguard against losing access to encrypted messages & data by backing up encryption keys on your server.")),i.a.createElement("div",{className:"mx_CreateSecretStorageDialog_primaryContainer",role:"radiogroup"},a,t),i.a.createElement(k.a,{primaryButton:Object(d.a)("Continue"),onPrimaryButtonClick:this.onChooseKeyPassphraseFormSubmit,onCancel:this.onCancelClick,hasCancel:this.state.canSkip}))}renderPhaseMigrate(){let e,a=Object(d.a)("Next");return this.state.canUploadKeysWithPasswordOnly?e=i.a.createElement("div",null,i.a.createElement("div",null,Object(d.a)("Enter your account password to confirm the upgrade:")),i.a.createElement("div",null,i.a.createElement(v.a,{type:"password",label:Object(d.a)("Password"),value:this.state.accountPassword,onChange:this.onAccountPasswordChange,forceValidity:!1!==this.state.accountPasswordCorrect&&null,autoFocus:!0}))):this.state.backupSigStatus.usable?e=i.a.createElement("p",null,Object(d.a)("You'll need to authenticate with the server to confirm the upgrade.")):(e=i.a.createElement("div",null,i.a.createElement("div",null,Object(d.a)("Restore your key backup to upgrade your encryption"))),a=Object(d.a)("Restore")),i.a.createElement("form",{onSubmit:this.onMigrateFormSubmit},i.a.createElement("p",null,Object(d.a)("Upgrade this session to allow it to verify other sessions, granting them access to encrypted messages and marking them as trusted for other users.")),i.a.createElement("div",null,e),i.a.createElement(k.a,{primaryButton:a,onPrimaryButtonClick:this.onMigrateFormSubmit,hasCancel:!1,primaryDisabled:this.state.canUploadKeysWithPasswordOnly&&!this.state.accountPassword},i.a.createElement("button",{type:"button",className:"danger",onClick:this.onCancelClick},Object(d.a)("Skip"))))}renderPhasePassPhrase(){return i.a.createElement("form",{onSubmit:this.onPassPhraseNextClick},i.a.createElement("p",null,Object(d.a)("Enter a security phrase only you know, as it's used to safeguard your data. To be secure, you shouldn't re-use your account password.")),i.a.createElement("div",{className:"mx_CreateSecretStorageDialog_passPhraseContainer"},i.a.createElement(P.a,{className:"mx_CreateSecretStorageDialog_passPhraseField",onChange:this.onPassPhraseChange,minScore:4,value:this.state.passPhrase,onValidate:this.onPassPhraseValidate,fieldRef:this.passphraseField,autoFocus:!0,label:Object(d.c)("Enter a Security Phrase"),labelEnterPassword:Object(d.c)("Enter a Security Phrase"),labelStrongPassword:Object(d.c)("Great! This Security Phrase looks strong enough."),labelAllowedButUnsafe:Object(d.c)("Great! This Security Phrase looks strong enough.")})),i.a.createElement(k.a,{primaryButton:Object(d.a)("Continue"),onPrimaryButtonClick:this.onPassPhraseNextClick,hasCancel:!1,disabled:!this.state.passPhraseValid},i.a.createElement("button",{type:"button",onClick:this.onCancelClick,className:"danger"},Object(d.a)("Cancel"))))}renderPhasePassPhraseConfirm(){let e,a;this.state.passPhraseConfirm===this.state.passPhrase?(e=Object(d.a)("That matches!"),a=Object(d.a)("Use a different passphrase?")):this.state.passPhrase.startsWith(this.state.passPhraseConfirm)||(e=Object(d.a)("That doesn't match."),a=Object(d.a)("Go back to set it again."));let t=null;return e&&(t=i.a.createElement("div",null,i.a.createElement("div",null,e),i.a.createElement("div",null,i.a.createElement(b.a,{element:"span",className:"mx_linkButton",onClick:this.onSetAgainClick},a)))),i.a.createElement("form",{onSubmit:this.onPassPhraseConfirmNextClick},i.a.createElement("p",null,Object(d.a)("Enter your Security Phrase a second time to confirm it.")),i.a.createElement("div",{className:"mx_CreateSecretStorageDialog_passPhraseContainer"},i.a.createElement(v.a,{type:"password",onChange:this.onPassPhraseConfirmChange,value:this.state.passPhraseConfirm,className:"mx_CreateSecretStorageDialog_passPhraseField",label:Object(d.a)("Confirm your Security Phrase"),autoFocus:!0,autoComplete:"new-password"}),i.a.createElement("div",{className:"mx_CreateSecretStorageDialog_passPhraseMatch"},t)),i.a.createElement(k.a,{primaryButton:Object(d.a)("Continue"),onPrimaryButtonClick:this.onPassPhraseConfirmNextClick,hasCancel:!1,disabled:this.state.passPhrase!==this.state.passPhraseConfirm},i.a.createElement("button",{type:"button",onClick:this.onCancelClick,className:"danger"},Object(d.a)("Skip"))))}renderPhaseShowKey(){let e;return e=this.state.phase===s.ShowKey?i.a.createElement(k.a,{primaryButton:Object(d.a)("Continue"),disabled:!this.state.downloaded&&!this.state.copied&&!this.state.setPassphrase,onPrimaryButtonClick:this.onShowKeyContinueClick,hasCancel:!1}):i.a.createElement("div",{className:"mx_CreateSecretStorageDialog_continueSpinner"},i.a.createElement(f.a,null)),i.a.createElement("div",null,i.a.createElement("p",null,Object(d.a)("Store your Security Key somewhere safe, like a password manager or a safe, as it's used to safeguard your encrypted data.")),i.a.createElement("div",{className:"mx_CreateSecretStorageDialog_primaryContainer mx_CreateSecretStorageDialog_recoveryKeyPrimarycontainer"},i.a.createElement("div",{className:"mx_CreateSecretStorageDialog_recoveryKeyContainer"},i.a.createElement("div",{className:"mx_CreateSecretStorageDialog_recoveryKey"},i.a.createElement("code",{ref:this.recoveryKeyNode},this.recoveryKey.encodedPrivateKey)),i.a.createElement("div",{className:"mx_CreateSecretStorageDialog_recoveryKeyButtons"},i.a.createElement(b.a,{kind:"primary",className:"mx_Dialog_primary",onClick:this.onDownloadClick,disabled:this.state.phase===s.Storing},Object(d.a)("Download")),i.a.createElement("span",null,Object(d.a)("or")),i.a.createElement(b.a,{kind:"primary",className:"mx_Dialog_primary mx_CreateSecretStorageDialog_recoveryKeyButtons_copyBtn",onClick:this.onCopyClick,disabled:this.state.phase===s.Storing},this.state.copied?Object(d.a)("Copied!"):Object(d.a)("Copy"))))),e)}renderBusyPhase(){return i.a.createElement("div",null,i.a.createElement(_.a,null))}renderPhaseLoadError(){return i.a.createElement("div",null,i.a.createElement("p",null,Object(d.a)("Unable to query secret storage status")),i.a.createElement("div",{className:"mx_Dialog_buttons"},i.a.createElement(k.a,{primaryButton:Object(d.a)("Retry"),onPrimaryButtonClick:this.onLoadRetryClick,hasCancel:this.state.canSkip,onCancel:this.onCancel})))}renderPhaseSkipConfirm(){return i.a.createElement("div",null,i.a.createElement("p",null,Object(d.a)("If you cancel now, you may lose encrypted messages & data if you lose access to your logins.")),i.a.createElement("p",null,Object(d.a)("You can also set up Secure Backup & manage your keys in Settings.")),i.a.createElement(k.a,{primaryButton:Object(d.a)("Go back"),onPrimaryButtonClick:this.onGoBackClick,hasCancel:!1},i.a.createElement("button",{type:"button",className:"danger",onClick:this.onCancel},Object(d.a)("Cancel"))))}titleForPhase(e){switch(e){case s.ChooseKeyPassphrase:return Object(d.a)("Set up Secure Backup");case s.Migrate:return Object(d.a)("Upgrade your encryption");case s.Passphrase:return Object(d.a)("Set a Security Phrase");case s.PassphraseConfirm:return Object(d.a)("Confirm Security Phrase");case s.ConfirmSkip:return Object(d.a)("Are you sure?");case s.ShowKey:return Object(d.a)("Save your Security Key");case s.Storing:return Object(d.a)("Setting up keys");default:return""}}render(){let e;if(this.state.error)e=i.a.createElement("div",null,i.a.createElement("p",null,Object(d.a)("Unable to set up secret storage")),i.a.createElement("div",{className:"mx_Dialog_buttons"},i.a.createElement(k.a,{primaryButton:Object(d.a)("Retry"),onPrimaryButtonClick:this.bootstrapSecretStorage,hasCancel:this.state.canSkip,onCancel:this.onCancel})));else switch(this.state.phase){case s.Loading:e=this.renderBusyPhase();break;case s.LoadError:e=this.renderPhaseLoadError();break;case s.ChooseKeyPassphrase:e=this.renderPhaseChooseKeyPassphrase();break;case s.Migrate:e=this.renderPhaseMigrate();break;case s.Passphrase:e=this.renderPhasePassPhrase();break;case s.PassphraseConfirm:e=this.renderPhasePassPhraseConfirm();break;case s.ShowKey:e=this.renderPhaseShowKey();break;case s.Storing:e=this.renderBusyPhase();break;case s.ConfirmSkip:e=this.renderPhaseSkipConfirm()}let a=null;switch(this.state.phase){case s.Passphrase:case s.PassphraseConfirm:a=["mx_CreateSecretStorageDialog_titleWithIcon","mx_CreateSecretStorageDialog_securePhraseTitle"];break;case s.ShowKey:a=["mx_CreateSecretStorageDialog_titleWithIcon","mx_CreateSecretStorageDialog_secureBackupTitle"];break;case s.ChooseKeyPassphrase:a="mx_CreateSecretStorageDialog_centeredTitle"}return i.a.createElement(O.a,{className:"mx_CreateSecretStorageDialog",onFinished:this.props.onFinished,title:this.titleForPhase(this.state.phase),titleClass:a,hasCancel:this.props.hasCancel&&[s.Passphrase].includes(this.state.phase),fixedWidth:!1},i.a.createElement("div",null,e))}}o()(B,"defaultProps",{hasCancel:!0,forceReset:!1})}}]);
//# sourceMappingURL=31.js.map
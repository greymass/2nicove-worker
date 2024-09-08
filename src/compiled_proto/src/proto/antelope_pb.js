// source: src/proto/antelope.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.sf.antelope.type.v1.AccountCreationRef', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.AccountDelta', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.AccountRAMDelta', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.Action', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.ActionReceipt', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.ActionTrace', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.ActionTraces', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.ActivatedProtocolFeatures', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.AuthSequence', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.Authority', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.Block', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.BlockHeader', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.BlockHeaderExtension', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.BlockHeaderExtension.ExtensionCase', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.BlockRef', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.BlockReversibility', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.BlockRootMerkle', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.BlockSigningAuthority', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.BlockSigningAuthority.VariantCase', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.BlockSigningAuthorityV0', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.BlockWithRefs', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.CreationFlatNode', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.DBOp', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.DBOp.Operation', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.DBOps', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.DTrxOp', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.DTrxOp.Operation', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.ElasticLimitParameters', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.Exception', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.Exception.LogContext', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.Exception.LogMessage', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.ExtDTrxOp', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.Extension', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.Feature', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.FeatureOp', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.FeatureOp.Kind', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.FinalityData', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.FinalizerAuthority', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.FinalizerPolicy', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.HeaderOnlyBlock', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.KeyWeight', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.PackedTransaction', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.PendingProducerSchedule', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.PermOp', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.PermOp.Operation', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.Permission', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.PermissionLevel', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.PermissionLevelWeight', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.PermissionObject', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.ProducerAuthority', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.ProducerAuthoritySchedule', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.ProducerKey', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.ProducerSchedule', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.ProducerScheduleChangeExtension', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.ProducerToLastImpliedIRB', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.ProducerToLastProduced', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.ProposerPolicy', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.ProtocolFeatureActivationExtension', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.PublicKeys', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.RAMCorrectionOp', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.RAMOp', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.RAMOp.Action', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.RAMOp.Namespace', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.RAMOp.Operation', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.Ratio', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.RlimitAccountLimits', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.RlimitAccountUsage', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.RlimitConfig', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.RlimitOp', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.RlimitOp.KindCase', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.RlimitOp.Operation', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.RlimitState', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.SignedTransaction', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.Specification', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.SubjectiveRestrictions', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.TableOp', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.TableOp.Operation', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.Transaction', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.TransactionEvent', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.TransactionEvent.Added', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.TransactionEvent.AddedInternally', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.TransactionEvent.DtrxCanceled', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.TransactionEvent.DtrxScheduled', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.TransactionEvent.EventCase', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.TransactionEvent.Executed', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.TransactionHeader', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.TransactionLifecycle', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.TransactionReceipt', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.TransactionReceiptHeader', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.TransactionRefs', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.TransactionStatus', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.TransactionTrace', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.TransactionTraceWithBlockRef', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.TransactionTraces', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.TrxOp', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.TrxOp.Operation', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.UsageAccumulator', null, global);
goog.exportSymbol('proto.sf.antelope.type.v1.WaitWeight', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.ActionTraces = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sf.antelope.type.v1.ActionTraces.repeatedFields_, null);
};
goog.inherits(proto.sf.antelope.type.v1.ActionTraces, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.ActionTraces.displayName = 'proto.sf.antelope.type.v1.ActionTraces';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.TransactionTraces = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sf.antelope.type.v1.TransactionTraces.repeatedFields_, null);
};
goog.inherits(proto.sf.antelope.type.v1.TransactionTraces, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.TransactionTraces.displayName = 'proto.sf.antelope.type.v1.TransactionTraces';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.DBOps = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sf.antelope.type.v1.DBOps.repeatedFields_, null);
};
goog.inherits(proto.sf.antelope.type.v1.DBOps, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.DBOps.displayName = 'proto.sf.antelope.type.v1.DBOps';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.Block = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sf.antelope.type.v1.Block.repeatedFields_, null);
};
goog.inherits(proto.sf.antelope.type.v1.Block, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.Block.displayName = 'proto.sf.antelope.type.v1.Block';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.FinalityData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.FinalityData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.FinalityData.displayName = 'proto.sf.antelope.type.v1.FinalityData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.FinalizerPolicy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sf.antelope.type.v1.FinalizerPolicy.repeatedFields_, null);
};
goog.inherits(proto.sf.antelope.type.v1.FinalizerPolicy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.FinalizerPolicy.displayName = 'proto.sf.antelope.type.v1.FinalizerPolicy';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.FinalizerAuthority = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.FinalizerAuthority, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.FinalizerAuthority.displayName = 'proto.sf.antelope.type.v1.FinalizerAuthority';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.BlockWithRefs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.BlockWithRefs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.BlockWithRefs.displayName = 'proto.sf.antelope.type.v1.BlockWithRefs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.TransactionRefs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sf.antelope.type.v1.TransactionRefs.repeatedFields_, null);
};
goog.inherits(proto.sf.antelope.type.v1.TransactionRefs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.TransactionRefs.displayName = 'proto.sf.antelope.type.v1.TransactionRefs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.ActivatedProtocolFeatures = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sf.antelope.type.v1.ActivatedProtocolFeatures.repeatedFields_, null);
};
goog.inherits(proto.sf.antelope.type.v1.ActivatedProtocolFeatures, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.ActivatedProtocolFeatures.displayName = 'proto.sf.antelope.type.v1.ActivatedProtocolFeatures';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.PendingProducerSchedule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.PendingProducerSchedule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.PendingProducerSchedule.displayName = 'proto.sf.antelope.type.v1.PendingProducerSchedule';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.ProducerSchedule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sf.antelope.type.v1.ProducerSchedule.repeatedFields_, null);
};
goog.inherits(proto.sf.antelope.type.v1.ProducerSchedule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.ProducerSchedule.displayName = 'proto.sf.antelope.type.v1.ProducerSchedule';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.ProducerKey = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.ProducerKey, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.ProducerKey.displayName = 'proto.sf.antelope.type.v1.ProducerKey';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.ProducerAuthoritySchedule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sf.antelope.type.v1.ProducerAuthoritySchedule.repeatedFields_, null);
};
goog.inherits(proto.sf.antelope.type.v1.ProducerAuthoritySchedule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.ProducerAuthoritySchedule.displayName = 'proto.sf.antelope.type.v1.ProducerAuthoritySchedule';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.ProducerAuthority = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.ProducerAuthority, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.ProducerAuthority.displayName = 'proto.sf.antelope.type.v1.ProducerAuthority';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.ProposerPolicy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.ProposerPolicy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.ProposerPolicy.displayName = 'proto.sf.antelope.type.v1.ProposerPolicy';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.BlockSigningAuthority = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.sf.antelope.type.v1.BlockSigningAuthority.oneofGroups_);
};
goog.inherits(proto.sf.antelope.type.v1.BlockSigningAuthority, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.BlockSigningAuthority.displayName = 'proto.sf.antelope.type.v1.BlockSigningAuthority';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.BlockSigningAuthorityV0 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sf.antelope.type.v1.BlockSigningAuthorityV0.repeatedFields_, null);
};
goog.inherits(proto.sf.antelope.type.v1.BlockSigningAuthorityV0, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.BlockSigningAuthorityV0.displayName = 'proto.sf.antelope.type.v1.BlockSigningAuthorityV0';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.BlockRootMerkle = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sf.antelope.type.v1.BlockRootMerkle.repeatedFields_, null);
};
goog.inherits(proto.sf.antelope.type.v1.BlockRootMerkle, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.BlockRootMerkle.displayName = 'proto.sf.antelope.type.v1.BlockRootMerkle';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.ProducerToLastProduced = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.ProducerToLastProduced, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.ProducerToLastProduced.displayName = 'proto.sf.antelope.type.v1.ProducerToLastProduced';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.ProducerToLastImpliedIRB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.ProducerToLastImpliedIRB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.ProducerToLastImpliedIRB.displayName = 'proto.sf.antelope.type.v1.ProducerToLastImpliedIRB';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.TransactionReceipt = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.TransactionReceipt, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.TransactionReceipt.displayName = 'proto.sf.antelope.type.v1.TransactionReceipt';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.PackedTransaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sf.antelope.type.v1.PackedTransaction.repeatedFields_, null);
};
goog.inherits(proto.sf.antelope.type.v1.PackedTransaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.PackedTransaction.displayName = 'proto.sf.antelope.type.v1.PackedTransaction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.BlockHeader = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sf.antelope.type.v1.BlockHeader.repeatedFields_, null);
};
goog.inherits(proto.sf.antelope.type.v1.BlockHeader, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.BlockHeader.displayName = 'proto.sf.antelope.type.v1.BlockHeader';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.BlockHeaderExtension = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.sf.antelope.type.v1.BlockHeaderExtension.oneofGroups_);
};
goog.inherits(proto.sf.antelope.type.v1.BlockHeaderExtension, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.BlockHeaderExtension.displayName = 'proto.sf.antelope.type.v1.BlockHeaderExtension';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.ProtocolFeatureActivationExtension = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sf.antelope.type.v1.ProtocolFeatureActivationExtension.repeatedFields_, null);
};
goog.inherits(proto.sf.antelope.type.v1.ProtocolFeatureActivationExtension, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.ProtocolFeatureActivationExtension.displayName = 'proto.sf.antelope.type.v1.ProtocolFeatureActivationExtension';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.ProducerScheduleChangeExtension = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.ProducerScheduleChangeExtension, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.ProducerScheduleChangeExtension.displayName = 'proto.sf.antelope.type.v1.ProducerScheduleChangeExtension';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.TransactionEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.sf.antelope.type.v1.TransactionEvent.oneofGroups_);
};
goog.inherits(proto.sf.antelope.type.v1.TransactionEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.TransactionEvent.displayName = 'proto.sf.antelope.type.v1.TransactionEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.TransactionEvent.AddedInternally = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.TransactionEvent.AddedInternally, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.TransactionEvent.AddedInternally.displayName = 'proto.sf.antelope.type.v1.TransactionEvent.AddedInternally';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.TransactionEvent.Added = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.TransactionEvent.Added, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.TransactionEvent.Added.displayName = 'proto.sf.antelope.type.v1.TransactionEvent.Added';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.TransactionEvent.Executed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.TransactionEvent.Executed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.TransactionEvent.Executed.displayName = 'proto.sf.antelope.type.v1.TransactionEvent.Executed';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.TransactionEvent.DtrxScheduled = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.TransactionEvent.DtrxScheduled, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.TransactionEvent.DtrxScheduled.displayName = 'proto.sf.antelope.type.v1.TransactionEvent.DtrxScheduled';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.TransactionEvent.DtrxCanceled = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.TransactionEvent.DtrxCanceled, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.TransactionEvent.DtrxCanceled.displayName = 'proto.sf.antelope.type.v1.TransactionEvent.DtrxCanceled';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.PublicKeys = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sf.antelope.type.v1.PublicKeys.repeatedFields_, null);
};
goog.inherits(proto.sf.antelope.type.v1.PublicKeys, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.PublicKeys.displayName = 'proto.sf.antelope.type.v1.PublicKeys';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.TransactionLifecycle = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sf.antelope.type.v1.TransactionLifecycle.repeatedFields_, null);
};
goog.inherits(proto.sf.antelope.type.v1.TransactionLifecycle, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.TransactionLifecycle.displayName = 'proto.sf.antelope.type.v1.TransactionLifecycle';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.SignedTransaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sf.antelope.type.v1.SignedTransaction.repeatedFields_, null);
};
goog.inherits(proto.sf.antelope.type.v1.SignedTransaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.SignedTransaction.displayName = 'proto.sf.antelope.type.v1.SignedTransaction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.Transaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sf.antelope.type.v1.Transaction.repeatedFields_, null);
};
goog.inherits(proto.sf.antelope.type.v1.Transaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.Transaction.displayName = 'proto.sf.antelope.type.v1.Transaction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.TransactionHeader = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.TransactionHeader, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.TransactionHeader.displayName = 'proto.sf.antelope.type.v1.TransactionHeader';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.TransactionTrace = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sf.antelope.type.v1.TransactionTrace.repeatedFields_, null);
};
goog.inherits(proto.sf.antelope.type.v1.TransactionTrace, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.TransactionTrace.displayName = 'proto.sf.antelope.type.v1.TransactionTrace';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.TransactionReceiptHeader = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.TransactionReceiptHeader, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.TransactionReceiptHeader.displayName = 'proto.sf.antelope.type.v1.TransactionReceiptHeader';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.Action = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sf.antelope.type.v1.Action.repeatedFields_, null);
};
goog.inherits(proto.sf.antelope.type.v1.Action, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.Action.displayName = 'proto.sf.antelope.type.v1.Action';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.ActionTrace = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sf.antelope.type.v1.ActionTrace.repeatedFields_, null);
};
goog.inherits(proto.sf.antelope.type.v1.ActionTrace, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.ActionTrace.displayName = 'proto.sf.antelope.type.v1.ActionTrace';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.ActionReceipt = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sf.antelope.type.v1.ActionReceipt.repeatedFields_, null);
};
goog.inherits(proto.sf.antelope.type.v1.ActionReceipt, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.ActionReceipt.displayName = 'proto.sf.antelope.type.v1.ActionReceipt';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.AuthSequence = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.AuthSequence, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.AuthSequence.displayName = 'proto.sf.antelope.type.v1.AuthSequence';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.AccountRAMDelta = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.AccountRAMDelta, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.AccountRAMDelta.displayName = 'proto.sf.antelope.type.v1.AccountRAMDelta';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.AccountDelta = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.AccountDelta, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.AccountDelta.displayName = 'proto.sf.antelope.type.v1.AccountDelta';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.Extension = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.Extension, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.Extension.displayName = 'proto.sf.antelope.type.v1.Extension';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.TrxOp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.TrxOp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.TrxOp.displayName = 'proto.sf.antelope.type.v1.TrxOp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.DBOp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.DBOp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.DBOp.displayName = 'proto.sf.antelope.type.v1.DBOp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.RAMOp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.RAMOp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.RAMOp.displayName = 'proto.sf.antelope.type.v1.RAMOp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.RAMCorrectionOp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.RAMCorrectionOp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.RAMCorrectionOp.displayName = 'proto.sf.antelope.type.v1.RAMCorrectionOp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.TableOp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.TableOp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.TableOp.displayName = 'proto.sf.antelope.type.v1.TableOp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.DTrxOp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.DTrxOp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.DTrxOp.displayName = 'proto.sf.antelope.type.v1.DTrxOp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.ExtDTrxOp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.ExtDTrxOp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.ExtDTrxOp.displayName = 'proto.sf.antelope.type.v1.ExtDTrxOp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.FeatureOp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.FeatureOp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.FeatureOp.displayName = 'proto.sf.antelope.type.v1.FeatureOp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.CreationFlatNode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.CreationFlatNode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.CreationFlatNode.displayName = 'proto.sf.antelope.type.v1.CreationFlatNode';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.PermOp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.PermOp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.PermOp.displayName = 'proto.sf.antelope.type.v1.PermOp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.PermissionObject = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.PermissionObject, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.PermissionObject.displayName = 'proto.sf.antelope.type.v1.PermissionObject';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.Permission = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.Permission, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.Permission.displayName = 'proto.sf.antelope.type.v1.Permission';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.Authority = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sf.antelope.type.v1.Authority.repeatedFields_, null);
};
goog.inherits(proto.sf.antelope.type.v1.Authority, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.Authority.displayName = 'proto.sf.antelope.type.v1.Authority';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.KeyWeight = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.KeyWeight, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.KeyWeight.displayName = 'proto.sf.antelope.type.v1.KeyWeight';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.PermissionLevel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.PermissionLevel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.PermissionLevel.displayName = 'proto.sf.antelope.type.v1.PermissionLevel';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.PermissionLevelWeight = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.PermissionLevelWeight, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.PermissionLevelWeight.displayName = 'proto.sf.antelope.type.v1.PermissionLevelWeight';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.WaitWeight = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.WaitWeight, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.WaitWeight.displayName = 'proto.sf.antelope.type.v1.WaitWeight';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.RlimitOp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.sf.antelope.type.v1.RlimitOp.oneofGroups_);
};
goog.inherits(proto.sf.antelope.type.v1.RlimitOp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.RlimitOp.displayName = 'proto.sf.antelope.type.v1.RlimitOp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.RlimitState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.RlimitState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.RlimitState.displayName = 'proto.sf.antelope.type.v1.RlimitState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.RlimitConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.RlimitConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.RlimitConfig.displayName = 'proto.sf.antelope.type.v1.RlimitConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.RlimitAccountLimits = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.RlimitAccountLimits, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.RlimitAccountLimits.displayName = 'proto.sf.antelope.type.v1.RlimitAccountLimits';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.RlimitAccountUsage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.RlimitAccountUsage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.RlimitAccountUsage.displayName = 'proto.sf.antelope.type.v1.RlimitAccountUsage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.UsageAccumulator = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.UsageAccumulator, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.UsageAccumulator.displayName = 'proto.sf.antelope.type.v1.UsageAccumulator';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.ElasticLimitParameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.ElasticLimitParameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.ElasticLimitParameters.displayName = 'proto.sf.antelope.type.v1.ElasticLimitParameters';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.Ratio = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.Ratio, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.Ratio.displayName = 'proto.sf.antelope.type.v1.Ratio';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.Exception = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sf.antelope.type.v1.Exception.repeatedFields_, null);
};
goog.inherits(proto.sf.antelope.type.v1.Exception, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.Exception.displayName = 'proto.sf.antelope.type.v1.Exception';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.Exception.LogMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.Exception.LogMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.Exception.LogMessage.displayName = 'proto.sf.antelope.type.v1.Exception.LogMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.Exception.LogContext = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.Exception.LogContext, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.Exception.LogContext.displayName = 'proto.sf.antelope.type.v1.Exception.LogContext';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.Feature = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sf.antelope.type.v1.Feature.repeatedFields_, null);
};
goog.inherits(proto.sf.antelope.type.v1.Feature, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.Feature.displayName = 'proto.sf.antelope.type.v1.Feature';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.SubjectiveRestrictions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.SubjectiveRestrictions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.SubjectiveRestrictions.displayName = 'proto.sf.antelope.type.v1.SubjectiveRestrictions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.Specification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.Specification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.Specification.displayName = 'proto.sf.antelope.type.v1.Specification';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.AccountCreationRef = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.AccountCreationRef, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.AccountCreationRef.displayName = 'proto.sf.antelope.type.v1.AccountCreationRef';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.HeaderOnlyBlock = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.HeaderOnlyBlock, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.HeaderOnlyBlock.displayName = 'proto.sf.antelope.type.v1.HeaderOnlyBlock';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.TransactionTraceWithBlockRef = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.TransactionTraceWithBlockRef, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.TransactionTraceWithBlockRef.displayName = 'proto.sf.antelope.type.v1.TransactionTraceWithBlockRef';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sf.antelope.type.v1.BlockRef = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sf.antelope.type.v1.BlockRef, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sf.antelope.type.v1.BlockRef.displayName = 'proto.sf.antelope.type.v1.BlockRef';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sf.antelope.type.v1.ActionTraces.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.ActionTraces.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.ActionTraces.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.ActionTraces} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.ActionTraces.toObject = function(includeInstance, msg) {
  var f, obj = {
    actionTracesList: jspb.Message.toObjectList(msg.getActionTracesList(),
    proto.sf.antelope.type.v1.ActionTrace.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.ActionTraces}
 */
proto.sf.antelope.type.v1.ActionTraces.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.ActionTraces;
  return proto.sf.antelope.type.v1.ActionTraces.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.ActionTraces} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.ActionTraces}
 */
proto.sf.antelope.type.v1.ActionTraces.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sf.antelope.type.v1.ActionTrace;
      reader.readMessage(value,proto.sf.antelope.type.v1.ActionTrace.deserializeBinaryFromReader);
      msg.addActionTraces(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.ActionTraces.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.ActionTraces.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.ActionTraces} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.ActionTraces.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActionTracesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.sf.antelope.type.v1.ActionTrace.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ActionTrace action_traces = 1;
 * @return {!Array<!proto.sf.antelope.type.v1.ActionTrace>}
 */
proto.sf.antelope.type.v1.ActionTraces.prototype.getActionTracesList = function() {
  return /** @type{!Array<!proto.sf.antelope.type.v1.ActionTrace>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sf.antelope.type.v1.ActionTrace, 1));
};


/**
 * @param {!Array<!proto.sf.antelope.type.v1.ActionTrace>} value
 * @return {!proto.sf.antelope.type.v1.ActionTraces} returns this
*/
proto.sf.antelope.type.v1.ActionTraces.prototype.setActionTracesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sf.antelope.type.v1.ActionTrace=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.ActionTrace}
 */
proto.sf.antelope.type.v1.ActionTraces.prototype.addActionTraces = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sf.antelope.type.v1.ActionTrace, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.ActionTraces} returns this
 */
proto.sf.antelope.type.v1.ActionTraces.prototype.clearActionTracesList = function() {
  return this.setActionTracesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sf.antelope.type.v1.TransactionTraces.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.TransactionTraces.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.TransactionTraces.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.TransactionTraces} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.TransactionTraces.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionTracesList: jspb.Message.toObjectList(msg.getTransactionTracesList(),
    proto.sf.antelope.type.v1.TransactionTrace.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.TransactionTraces}
 */
proto.sf.antelope.type.v1.TransactionTraces.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.TransactionTraces;
  return proto.sf.antelope.type.v1.TransactionTraces.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.TransactionTraces} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.TransactionTraces}
 */
proto.sf.antelope.type.v1.TransactionTraces.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sf.antelope.type.v1.TransactionTrace;
      reader.readMessage(value,proto.sf.antelope.type.v1.TransactionTrace.deserializeBinaryFromReader);
      msg.addTransactionTraces(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.TransactionTraces.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.TransactionTraces.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.TransactionTraces} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.TransactionTraces.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionTracesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.sf.antelope.type.v1.TransactionTrace.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TransactionTrace transaction_traces = 1;
 * @return {!Array<!proto.sf.antelope.type.v1.TransactionTrace>}
 */
proto.sf.antelope.type.v1.TransactionTraces.prototype.getTransactionTracesList = function() {
  return /** @type{!Array<!proto.sf.antelope.type.v1.TransactionTrace>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sf.antelope.type.v1.TransactionTrace, 1));
};


/**
 * @param {!Array<!proto.sf.antelope.type.v1.TransactionTrace>} value
 * @return {!proto.sf.antelope.type.v1.TransactionTraces} returns this
*/
proto.sf.antelope.type.v1.TransactionTraces.prototype.setTransactionTracesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sf.antelope.type.v1.TransactionTrace=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.TransactionTrace}
 */
proto.sf.antelope.type.v1.TransactionTraces.prototype.addTransactionTraces = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sf.antelope.type.v1.TransactionTrace, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.TransactionTraces} returns this
 */
proto.sf.antelope.type.v1.TransactionTraces.prototype.clearTransactionTracesList = function() {
  return this.setTransactionTracesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sf.antelope.type.v1.DBOps.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.DBOps.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.DBOps.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.DBOps} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.DBOps.toObject = function(includeInstance, msg) {
  var f, obj = {
    dbOpsList: jspb.Message.toObjectList(msg.getDbOpsList(),
    proto.sf.antelope.type.v1.DBOp.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.DBOps}
 */
proto.sf.antelope.type.v1.DBOps.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.DBOps;
  return proto.sf.antelope.type.v1.DBOps.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.DBOps} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.DBOps}
 */
proto.sf.antelope.type.v1.DBOps.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sf.antelope.type.v1.DBOp;
      reader.readMessage(value,proto.sf.antelope.type.v1.DBOp.deserializeBinaryFromReader);
      msg.addDbOps(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.DBOps.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.DBOps.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.DBOps} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.DBOps.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDbOpsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.sf.antelope.type.v1.DBOp.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DBOp db_ops = 1;
 * @return {!Array<!proto.sf.antelope.type.v1.DBOp>}
 */
proto.sf.antelope.type.v1.DBOps.prototype.getDbOpsList = function() {
  return /** @type{!Array<!proto.sf.antelope.type.v1.DBOp>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sf.antelope.type.v1.DBOp, 1));
};


/**
 * @param {!Array<!proto.sf.antelope.type.v1.DBOp>} value
 * @return {!proto.sf.antelope.type.v1.DBOps} returns this
*/
proto.sf.antelope.type.v1.DBOps.prototype.setDbOpsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sf.antelope.type.v1.DBOp=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.DBOp}
 */
proto.sf.antelope.type.v1.DBOps.prototype.addDbOps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sf.antelope.type.v1.DBOp, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.DBOps} returns this
 */
proto.sf.antelope.type.v1.DBOps.prototype.clearDbOpsList = function() {
  return this.setDbOpsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sf.antelope.type.v1.Block.repeatedFields_ = [7,12,13,15,19,6,47,20,49,21,46];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.Block.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.Block.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.Block} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.Block.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    number: jspb.Message.getFieldWithDefault(msg, 2, 0),
    version: jspb.Message.getFieldWithDefault(msg, 3, 0),
    header: (f = msg.getHeader()) && proto.sf.antelope.type.v1.BlockHeader.toObject(includeInstance, f),
    producerSignature: jspb.Message.getFieldWithDefault(msg, 5, ""),
    blockExtensionsList: jspb.Message.toObjectList(msg.getBlockExtensionsList(),
    proto.sf.antelope.type.v1.Extension.toObject, includeInstance),
    dposProposedIrreversibleBlocknum: jspb.Message.getFieldWithDefault(msg, 8, 0),
    dposIrreversibleBlocknum: jspb.Message.getFieldWithDefault(msg, 9, 0),
    blockrootMerkle: (f = msg.getBlockrootMerkle()) && proto.sf.antelope.type.v1.BlockRootMerkle.toObject(includeInstance, f),
    producerToLastProducedList: jspb.Message.toObjectList(msg.getProducerToLastProducedList(),
    proto.sf.antelope.type.v1.ProducerToLastProduced.toObject, includeInstance),
    producerToLastImpliedIrbList: jspb.Message.toObjectList(msg.getProducerToLastImpliedIrbList(),
    proto.sf.antelope.type.v1.ProducerToLastImpliedIRB.toObject, includeInstance),
    confirmCountList: (f = jspb.Message.getRepeatedField(msg, 15)) == null ? undefined : f,
    pendingSchedule: (f = msg.getPendingSchedule()) && proto.sf.antelope.type.v1.PendingProducerSchedule.toObject(includeInstance, f),
    activatedProtocolFeatures: (f = msg.getActivatedProtocolFeatures()) && proto.sf.antelope.type.v1.ActivatedProtocolFeatures.toObject(includeInstance, f),
    validated: jspb.Message.getBooleanFieldWithDefault(msg, 18, false),
    actionMrootSavanna: msg.getActionMrootSavanna_asB64(),
    finalityLib: jspb.Message.getFieldWithDefault(msg, 61, 0),
    finalityData: (f = msg.getFinalityData()) && proto.sf.antelope.type.v1.FinalityData.toObject(includeInstance, f),
    proposerPolicy: (f = msg.getProposerPolicy()) && proto.sf.antelope.type.v1.ProposerPolicy.toObject(includeInstance, f),
    finalizerPolicy: (f = msg.getFinalizerPolicy()) && proto.sf.antelope.type.v1.FinalizerPolicy.toObject(includeInstance, f),
    rlimitOpsList: jspb.Message.toObjectList(msg.getRlimitOpsList(),
    proto.sf.antelope.type.v1.RlimitOp.toObject, includeInstance),
    unfilteredTransactionsList: jspb.Message.toObjectList(msg.getUnfilteredTransactionsList(),
    proto.sf.antelope.type.v1.TransactionReceipt.toObject, includeInstance),
    filteredTransactionsList: jspb.Message.toObjectList(msg.getFilteredTransactionsList(),
    proto.sf.antelope.type.v1.TransactionReceipt.toObject, includeInstance),
    unfilteredTransactionCount: jspb.Message.getFieldWithDefault(msg, 22, 0),
    filteredTransactionCount: jspb.Message.getFieldWithDefault(msg, 48, 0),
    unfilteredImplicitTransactionOpsList: jspb.Message.toObjectList(msg.getUnfilteredImplicitTransactionOpsList(),
    proto.sf.antelope.type.v1.TrxOp.toObject, includeInstance),
    filteredImplicitTransactionOpsList: jspb.Message.toObjectList(msg.getFilteredImplicitTransactionOpsList(),
    proto.sf.antelope.type.v1.TrxOp.toObject, includeInstance),
    unfilteredTransactionTracesList: jspb.Message.toObjectList(msg.getUnfilteredTransactionTracesList(),
    proto.sf.antelope.type.v1.TransactionTrace.toObject, includeInstance),
    filteredTransactionTracesList: jspb.Message.toObjectList(msg.getFilteredTransactionTracesList(),
    proto.sf.antelope.type.v1.TransactionTrace.toObject, includeInstance),
    unfilteredTransactionTraceCount: jspb.Message.getFieldWithDefault(msg, 23, 0),
    filteredTransactionTraceCount: jspb.Message.getFieldWithDefault(msg, 43, 0),
    unfilteredExecutedInputActionCount: jspb.Message.getFieldWithDefault(msg, 24, 0),
    filteredExecutedInputActionCount: jspb.Message.getFieldWithDefault(msg, 44, 0),
    unfilteredExecutedTotalActionCount: jspb.Message.getFieldWithDefault(msg, 25, 0),
    filteredExecutedTotalActionCount: jspb.Message.getFieldWithDefault(msg, 45, 0),
    blockSigningKey: jspb.Message.getFieldWithDefault(msg, 14, ""),
    activeScheduleV1: (f = msg.getActiveScheduleV1()) && proto.sf.antelope.type.v1.ProducerSchedule.toObject(includeInstance, f),
    validBlockSigningAuthorityV2: (f = msg.getValidBlockSigningAuthorityV2()) && proto.sf.antelope.type.v1.BlockSigningAuthority.toObject(includeInstance, f),
    activeScheduleV2: (f = msg.getActiveScheduleV2()) && proto.sf.antelope.type.v1.ProducerAuthoritySchedule.toObject(includeInstance, f),
    filteringApplied: jspb.Message.getBooleanFieldWithDefault(msg, 40, false),
    filteringIncludeFilterExpr: jspb.Message.getFieldWithDefault(msg, 41, ""),
    filteringExcludeFilterExpr: jspb.Message.getFieldWithDefault(msg, 42, ""),
    filteringSystemActionsIncludeFilterExpr: jspb.Message.getFieldWithDefault(msg, 50, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.Block}
 */
proto.sf.antelope.type.v1.Block.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.Block;
  return proto.sf.antelope.type.v1.Block.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.Block} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.Block}
 */
proto.sf.antelope.type.v1.Block.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumber(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVersion(value);
      break;
    case 4:
      var value = new proto.sf.antelope.type.v1.BlockHeader;
      reader.readMessage(value,proto.sf.antelope.type.v1.BlockHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setProducerSignature(value);
      break;
    case 7:
      var value = new proto.sf.antelope.type.v1.Extension;
      reader.readMessage(value,proto.sf.antelope.type.v1.Extension.deserializeBinaryFromReader);
      msg.addBlockExtensions(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDposProposedIrreversibleBlocknum(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDposIrreversibleBlocknum(value);
      break;
    case 11:
      var value = new proto.sf.antelope.type.v1.BlockRootMerkle;
      reader.readMessage(value,proto.sf.antelope.type.v1.BlockRootMerkle.deserializeBinaryFromReader);
      msg.setBlockrootMerkle(value);
      break;
    case 12:
      var value = new proto.sf.antelope.type.v1.ProducerToLastProduced;
      reader.readMessage(value,proto.sf.antelope.type.v1.ProducerToLastProduced.deserializeBinaryFromReader);
      msg.addProducerToLastProduced(value);
      break;
    case 13:
      var value = new proto.sf.antelope.type.v1.ProducerToLastImpliedIRB;
      reader.readMessage(value,proto.sf.antelope.type.v1.ProducerToLastImpliedIRB.deserializeBinaryFromReader);
      msg.addProducerToLastImpliedIrb(value);
      break;
    case 15:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint32() : [reader.readUint32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addConfirmCount(values[i]);
      }
      break;
    case 16:
      var value = new proto.sf.antelope.type.v1.PendingProducerSchedule;
      reader.readMessage(value,proto.sf.antelope.type.v1.PendingProducerSchedule.deserializeBinaryFromReader);
      msg.setPendingSchedule(value);
      break;
    case 17:
      var value = new proto.sf.antelope.type.v1.ActivatedProtocolFeatures;
      reader.readMessage(value,proto.sf.antelope.type.v1.ActivatedProtocolFeatures.deserializeBinaryFromReader);
      msg.setActivatedProtocolFeatures(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValidated(value);
      break;
    case 60:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setActionMrootSavanna(value);
      break;
    case 61:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFinalityLib(value);
      break;
    case 62:
      var value = new proto.sf.antelope.type.v1.FinalityData;
      reader.readMessage(value,proto.sf.antelope.type.v1.FinalityData.deserializeBinaryFromReader);
      msg.setFinalityData(value);
      break;
    case 63:
      var value = new proto.sf.antelope.type.v1.ProposerPolicy;
      reader.readMessage(value,proto.sf.antelope.type.v1.ProposerPolicy.deserializeBinaryFromReader);
      msg.setProposerPolicy(value);
      break;
    case 64:
      var value = new proto.sf.antelope.type.v1.FinalizerPolicy;
      reader.readMessage(value,proto.sf.antelope.type.v1.FinalizerPolicy.deserializeBinaryFromReader);
      msg.setFinalizerPolicy(value);
      break;
    case 19:
      var value = new proto.sf.antelope.type.v1.RlimitOp;
      reader.readMessage(value,proto.sf.antelope.type.v1.RlimitOp.deserializeBinaryFromReader);
      msg.addRlimitOps(value);
      break;
    case 6:
      var value = new proto.sf.antelope.type.v1.TransactionReceipt;
      reader.readMessage(value,proto.sf.antelope.type.v1.TransactionReceipt.deserializeBinaryFromReader);
      msg.addUnfilteredTransactions(value);
      break;
    case 47:
      var value = new proto.sf.antelope.type.v1.TransactionReceipt;
      reader.readMessage(value,proto.sf.antelope.type.v1.TransactionReceipt.deserializeBinaryFromReader);
      msg.addFilteredTransactions(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUnfilteredTransactionCount(value);
      break;
    case 48:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFilteredTransactionCount(value);
      break;
    case 20:
      var value = new proto.sf.antelope.type.v1.TrxOp;
      reader.readMessage(value,proto.sf.antelope.type.v1.TrxOp.deserializeBinaryFromReader);
      msg.addUnfilteredImplicitTransactionOps(value);
      break;
    case 49:
      var value = new proto.sf.antelope.type.v1.TrxOp;
      reader.readMessage(value,proto.sf.antelope.type.v1.TrxOp.deserializeBinaryFromReader);
      msg.addFilteredImplicitTransactionOps(value);
      break;
    case 21:
      var value = new proto.sf.antelope.type.v1.TransactionTrace;
      reader.readMessage(value,proto.sf.antelope.type.v1.TransactionTrace.deserializeBinaryFromReader);
      msg.addUnfilteredTransactionTraces(value);
      break;
    case 46:
      var value = new proto.sf.antelope.type.v1.TransactionTrace;
      reader.readMessage(value,proto.sf.antelope.type.v1.TransactionTrace.deserializeBinaryFromReader);
      msg.addFilteredTransactionTraces(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUnfilteredTransactionTraceCount(value);
      break;
    case 43:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFilteredTransactionTraceCount(value);
      break;
    case 24:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUnfilteredExecutedInputActionCount(value);
      break;
    case 44:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFilteredExecutedInputActionCount(value);
      break;
    case 25:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUnfilteredExecutedTotalActionCount(value);
      break;
    case 45:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFilteredExecutedTotalActionCount(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlockSigningKey(value);
      break;
    case 10:
      var value = new proto.sf.antelope.type.v1.ProducerSchedule;
      reader.readMessage(value,proto.sf.antelope.type.v1.ProducerSchedule.deserializeBinaryFromReader);
      msg.setActiveScheduleV1(value);
      break;
    case 30:
      var value = new proto.sf.antelope.type.v1.BlockSigningAuthority;
      reader.readMessage(value,proto.sf.antelope.type.v1.BlockSigningAuthority.deserializeBinaryFromReader);
      msg.setValidBlockSigningAuthorityV2(value);
      break;
    case 31:
      var value = new proto.sf.antelope.type.v1.ProducerAuthoritySchedule;
      reader.readMessage(value,proto.sf.antelope.type.v1.ProducerAuthoritySchedule.deserializeBinaryFromReader);
      msg.setActiveScheduleV2(value);
      break;
    case 40:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFilteringApplied(value);
      break;
    case 41:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilteringIncludeFilterExpr(value);
      break;
    case 42:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilteringExcludeFilterExpr(value);
      break;
    case 50:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilteringSystemActionsIncludeFilterExpr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.Block.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.Block.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.Block} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.Block.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNumber();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getVersion();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.sf.antelope.type.v1.BlockHeader.serializeBinaryToWriter
    );
  }
  f = message.getProducerSignature();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getBlockExtensionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.sf.antelope.type.v1.Extension.serializeBinaryToWriter
    );
  }
  f = message.getDposProposedIrreversibleBlocknum();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getDposIrreversibleBlocknum();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = message.getBlockrootMerkle();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.sf.antelope.type.v1.BlockRootMerkle.serializeBinaryToWriter
    );
  }
  f = message.getProducerToLastProducedList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.sf.antelope.type.v1.ProducerToLastProduced.serializeBinaryToWriter
    );
  }
  f = message.getProducerToLastImpliedIrbList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      proto.sf.antelope.type.v1.ProducerToLastImpliedIRB.serializeBinaryToWriter
    );
  }
  f = message.getConfirmCountList();
  if (f.length > 0) {
    writer.writePackedUint32(
      15,
      f
    );
  }
  f = message.getPendingSchedule();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.sf.antelope.type.v1.PendingProducerSchedule.serializeBinaryToWriter
    );
  }
  f = message.getActivatedProtocolFeatures();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.sf.antelope.type.v1.ActivatedProtocolFeatures.serializeBinaryToWriter
    );
  }
  f = message.getValidated();
  if (f) {
    writer.writeBool(
      18,
      f
    );
  }
  f = message.getActionMrootSavanna_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      60,
      f
    );
  }
  f = message.getFinalityLib();
  if (f !== 0) {
    writer.writeUint32(
      61,
      f
    );
  }
  f = message.getFinalityData();
  if (f != null) {
    writer.writeMessage(
      62,
      f,
      proto.sf.antelope.type.v1.FinalityData.serializeBinaryToWriter
    );
  }
  f = message.getProposerPolicy();
  if (f != null) {
    writer.writeMessage(
      63,
      f,
      proto.sf.antelope.type.v1.ProposerPolicy.serializeBinaryToWriter
    );
  }
  f = message.getFinalizerPolicy();
  if (f != null) {
    writer.writeMessage(
      64,
      f,
      proto.sf.antelope.type.v1.FinalizerPolicy.serializeBinaryToWriter
    );
  }
  f = message.getRlimitOpsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      19,
      f,
      proto.sf.antelope.type.v1.RlimitOp.serializeBinaryToWriter
    );
  }
  f = message.getUnfilteredTransactionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.sf.antelope.type.v1.TransactionReceipt.serializeBinaryToWriter
    );
  }
  f = message.getFilteredTransactionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      47,
      f,
      proto.sf.antelope.type.v1.TransactionReceipt.serializeBinaryToWriter
    );
  }
  f = message.getUnfilteredTransactionCount();
  if (f !== 0) {
    writer.writeUint32(
      22,
      f
    );
  }
  f = message.getFilteredTransactionCount();
  if (f !== 0) {
    writer.writeUint32(
      48,
      f
    );
  }
  f = message.getUnfilteredImplicitTransactionOpsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      20,
      f,
      proto.sf.antelope.type.v1.TrxOp.serializeBinaryToWriter
    );
  }
  f = message.getFilteredImplicitTransactionOpsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      49,
      f,
      proto.sf.antelope.type.v1.TrxOp.serializeBinaryToWriter
    );
  }
  f = message.getUnfilteredTransactionTracesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      21,
      f,
      proto.sf.antelope.type.v1.TransactionTrace.serializeBinaryToWriter
    );
  }
  f = message.getFilteredTransactionTracesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      46,
      f,
      proto.sf.antelope.type.v1.TransactionTrace.serializeBinaryToWriter
    );
  }
  f = message.getUnfilteredTransactionTraceCount();
  if (f !== 0) {
    writer.writeUint32(
      23,
      f
    );
  }
  f = message.getFilteredTransactionTraceCount();
  if (f !== 0) {
    writer.writeUint32(
      43,
      f
    );
  }
  f = message.getUnfilteredExecutedInputActionCount();
  if (f !== 0) {
    writer.writeUint32(
      24,
      f
    );
  }
  f = message.getFilteredExecutedInputActionCount();
  if (f !== 0) {
    writer.writeUint32(
      44,
      f
    );
  }
  f = message.getUnfilteredExecutedTotalActionCount();
  if (f !== 0) {
    writer.writeUint32(
      25,
      f
    );
  }
  f = message.getFilteredExecutedTotalActionCount();
  if (f !== 0) {
    writer.writeUint32(
      45,
      f
    );
  }
  f = message.getBlockSigningKey();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getActiveScheduleV1();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.sf.antelope.type.v1.ProducerSchedule.serializeBinaryToWriter
    );
  }
  f = message.getValidBlockSigningAuthorityV2();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      proto.sf.antelope.type.v1.BlockSigningAuthority.serializeBinaryToWriter
    );
  }
  f = message.getActiveScheduleV2();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      proto.sf.antelope.type.v1.ProducerAuthoritySchedule.serializeBinaryToWriter
    );
  }
  f = message.getFilteringApplied();
  if (f) {
    writer.writeBool(
      40,
      f
    );
  }
  f = message.getFilteringIncludeFilterExpr();
  if (f.length > 0) {
    writer.writeString(
      41,
      f
    );
  }
  f = message.getFilteringExcludeFilterExpr();
  if (f.length > 0) {
    writer.writeString(
      42,
      f
    );
  }
  f = message.getFilteringSystemActionsIncludeFilterExpr();
  if (f.length > 0) {
    writer.writeString(
      50,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.sf.antelope.type.v1.Block.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.Block} returns this
 */
proto.sf.antelope.type.v1.Block.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 number = 2;
 * @return {number}
 */
proto.sf.antelope.type.v1.Block.prototype.getNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.Block} returns this
 */
proto.sf.antelope.type.v1.Block.prototype.setNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 version = 3;
 * @return {number}
 */
proto.sf.antelope.type.v1.Block.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.Block} returns this
 */
proto.sf.antelope.type.v1.Block.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional BlockHeader header = 4;
 * @return {?proto.sf.antelope.type.v1.BlockHeader}
 */
proto.sf.antelope.type.v1.Block.prototype.getHeader = function() {
  return /** @type{?proto.sf.antelope.type.v1.BlockHeader} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.BlockHeader, 4));
};


/**
 * @param {?proto.sf.antelope.type.v1.BlockHeader|undefined} value
 * @return {!proto.sf.antelope.type.v1.Block} returns this
*/
proto.sf.antelope.type.v1.Block.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.Block} returns this
 */
proto.sf.antelope.type.v1.Block.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.Block.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string producer_signature = 5;
 * @return {string}
 */
proto.sf.antelope.type.v1.Block.prototype.getProducerSignature = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.Block} returns this
 */
proto.sf.antelope.type.v1.Block.prototype.setProducerSignature = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated Extension block_extensions = 7;
 * @return {!Array<!proto.sf.antelope.type.v1.Extension>}
 */
proto.sf.antelope.type.v1.Block.prototype.getBlockExtensionsList = function() {
  return /** @type{!Array<!proto.sf.antelope.type.v1.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sf.antelope.type.v1.Extension, 7));
};


/**
 * @param {!Array<!proto.sf.antelope.type.v1.Extension>} value
 * @return {!proto.sf.antelope.type.v1.Block} returns this
*/
proto.sf.antelope.type.v1.Block.prototype.setBlockExtensionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.sf.antelope.type.v1.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.Extension}
 */
proto.sf.antelope.type.v1.Block.prototype.addBlockExtensions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.sf.antelope.type.v1.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.Block} returns this
 */
proto.sf.antelope.type.v1.Block.prototype.clearBlockExtensionsList = function() {
  return this.setBlockExtensionsList([]);
};


/**
 * optional uint32 dpos_proposed_irreversible_blocknum = 8;
 * @return {number}
 */
proto.sf.antelope.type.v1.Block.prototype.getDposProposedIrreversibleBlocknum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.Block} returns this
 */
proto.sf.antelope.type.v1.Block.prototype.setDposProposedIrreversibleBlocknum = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint32 dpos_irreversible_blocknum = 9;
 * @return {number}
 */
proto.sf.antelope.type.v1.Block.prototype.getDposIrreversibleBlocknum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.Block} returns this
 */
proto.sf.antelope.type.v1.Block.prototype.setDposIrreversibleBlocknum = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional BlockRootMerkle blockroot_merkle = 11;
 * @return {?proto.sf.antelope.type.v1.BlockRootMerkle}
 */
proto.sf.antelope.type.v1.Block.prototype.getBlockrootMerkle = function() {
  return /** @type{?proto.sf.antelope.type.v1.BlockRootMerkle} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.BlockRootMerkle, 11));
};


/**
 * @param {?proto.sf.antelope.type.v1.BlockRootMerkle|undefined} value
 * @return {!proto.sf.antelope.type.v1.Block} returns this
*/
proto.sf.antelope.type.v1.Block.prototype.setBlockrootMerkle = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.Block} returns this
 */
proto.sf.antelope.type.v1.Block.prototype.clearBlockrootMerkle = function() {
  return this.setBlockrootMerkle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.Block.prototype.hasBlockrootMerkle = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * repeated ProducerToLastProduced producer_to_last_produced = 12;
 * @return {!Array<!proto.sf.antelope.type.v1.ProducerToLastProduced>}
 */
proto.sf.antelope.type.v1.Block.prototype.getProducerToLastProducedList = function() {
  return /** @type{!Array<!proto.sf.antelope.type.v1.ProducerToLastProduced>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sf.antelope.type.v1.ProducerToLastProduced, 12));
};


/**
 * @param {!Array<!proto.sf.antelope.type.v1.ProducerToLastProduced>} value
 * @return {!proto.sf.antelope.type.v1.Block} returns this
*/
proto.sf.antelope.type.v1.Block.prototype.setProducerToLastProducedList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.sf.antelope.type.v1.ProducerToLastProduced=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.ProducerToLastProduced}
 */
proto.sf.antelope.type.v1.Block.prototype.addProducerToLastProduced = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.sf.antelope.type.v1.ProducerToLastProduced, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.Block} returns this
 */
proto.sf.antelope.type.v1.Block.prototype.clearProducerToLastProducedList = function() {
  return this.setProducerToLastProducedList([]);
};


/**
 * repeated ProducerToLastImpliedIRB producer_to_last_implied_irb = 13;
 * @return {!Array<!proto.sf.antelope.type.v1.ProducerToLastImpliedIRB>}
 */
proto.sf.antelope.type.v1.Block.prototype.getProducerToLastImpliedIrbList = function() {
  return /** @type{!Array<!proto.sf.antelope.type.v1.ProducerToLastImpliedIRB>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sf.antelope.type.v1.ProducerToLastImpliedIRB, 13));
};


/**
 * @param {!Array<!proto.sf.antelope.type.v1.ProducerToLastImpliedIRB>} value
 * @return {!proto.sf.antelope.type.v1.Block} returns this
*/
proto.sf.antelope.type.v1.Block.prototype.setProducerToLastImpliedIrbList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.sf.antelope.type.v1.ProducerToLastImpliedIRB=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.ProducerToLastImpliedIRB}
 */
proto.sf.antelope.type.v1.Block.prototype.addProducerToLastImpliedIrb = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.sf.antelope.type.v1.ProducerToLastImpliedIRB, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.Block} returns this
 */
proto.sf.antelope.type.v1.Block.prototype.clearProducerToLastImpliedIrbList = function() {
  return this.setProducerToLastImpliedIrbList([]);
};


/**
 * repeated uint32 confirm_count = 15;
 * @return {!Array<number>}
 */
proto.sf.antelope.type.v1.Block.prototype.getConfirmCountList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 15));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.sf.antelope.type.v1.Block} returns this
 */
proto.sf.antelope.type.v1.Block.prototype.setConfirmCountList = function(value) {
  return jspb.Message.setField(this, 15, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.Block} returns this
 */
proto.sf.antelope.type.v1.Block.prototype.addConfirmCount = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 15, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.Block} returns this
 */
proto.sf.antelope.type.v1.Block.prototype.clearConfirmCountList = function() {
  return this.setConfirmCountList([]);
};


/**
 * optional PendingProducerSchedule pending_schedule = 16;
 * @return {?proto.sf.antelope.type.v1.PendingProducerSchedule}
 */
proto.sf.antelope.type.v1.Block.prototype.getPendingSchedule = function() {
  return /** @type{?proto.sf.antelope.type.v1.PendingProducerSchedule} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.PendingProducerSchedule, 16));
};


/**
 * @param {?proto.sf.antelope.type.v1.PendingProducerSchedule|undefined} value
 * @return {!proto.sf.antelope.type.v1.Block} returns this
*/
proto.sf.antelope.type.v1.Block.prototype.setPendingSchedule = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.Block} returns this
 */
proto.sf.antelope.type.v1.Block.prototype.clearPendingSchedule = function() {
  return this.setPendingSchedule(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.Block.prototype.hasPendingSchedule = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional ActivatedProtocolFeatures activated_protocol_features = 17;
 * @return {?proto.sf.antelope.type.v1.ActivatedProtocolFeatures}
 */
proto.sf.antelope.type.v1.Block.prototype.getActivatedProtocolFeatures = function() {
  return /** @type{?proto.sf.antelope.type.v1.ActivatedProtocolFeatures} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.ActivatedProtocolFeatures, 17));
};


/**
 * @param {?proto.sf.antelope.type.v1.ActivatedProtocolFeatures|undefined} value
 * @return {!proto.sf.antelope.type.v1.Block} returns this
*/
proto.sf.antelope.type.v1.Block.prototype.setActivatedProtocolFeatures = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.Block} returns this
 */
proto.sf.antelope.type.v1.Block.prototype.clearActivatedProtocolFeatures = function() {
  return this.setActivatedProtocolFeatures(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.Block.prototype.hasActivatedProtocolFeatures = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional bool validated = 18;
 * @return {boolean}
 */
proto.sf.antelope.type.v1.Block.prototype.getValidated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 18, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sf.antelope.type.v1.Block} returns this
 */
proto.sf.antelope.type.v1.Block.prototype.setValidated = function(value) {
  return jspb.Message.setProto3BooleanField(this, 18, value);
};


/**
 * optional bytes action_mroot_savanna = 60;
 * @return {!(string|Uint8Array)}
 */
proto.sf.antelope.type.v1.Block.prototype.getActionMrootSavanna = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 60, ""));
};


/**
 * optional bytes action_mroot_savanna = 60;
 * This is a type-conversion wrapper around `getActionMrootSavanna()`
 * @return {string}
 */
proto.sf.antelope.type.v1.Block.prototype.getActionMrootSavanna_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getActionMrootSavanna()));
};


/**
 * optional bytes action_mroot_savanna = 60;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getActionMrootSavanna()`
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.Block.prototype.getActionMrootSavanna_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getActionMrootSavanna()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sf.antelope.type.v1.Block} returns this
 */
proto.sf.antelope.type.v1.Block.prototype.setActionMrootSavanna = function(value) {
  return jspb.Message.setProto3BytesField(this, 60, value);
};


/**
 * optional uint32 finality_lib = 61;
 * @return {number}
 */
proto.sf.antelope.type.v1.Block.prototype.getFinalityLib = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 61, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.Block} returns this
 */
proto.sf.antelope.type.v1.Block.prototype.setFinalityLib = function(value) {
  return jspb.Message.setProto3IntField(this, 61, value);
};


/**
 * optional FinalityData finality_data = 62;
 * @return {?proto.sf.antelope.type.v1.FinalityData}
 */
proto.sf.antelope.type.v1.Block.prototype.getFinalityData = function() {
  return /** @type{?proto.sf.antelope.type.v1.FinalityData} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.FinalityData, 62));
};


/**
 * @param {?proto.sf.antelope.type.v1.FinalityData|undefined} value
 * @return {!proto.sf.antelope.type.v1.Block} returns this
*/
proto.sf.antelope.type.v1.Block.prototype.setFinalityData = function(value) {
  return jspb.Message.setWrapperField(this, 62, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.Block} returns this
 */
proto.sf.antelope.type.v1.Block.prototype.clearFinalityData = function() {
  return this.setFinalityData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.Block.prototype.hasFinalityData = function() {
  return jspb.Message.getField(this, 62) != null;
};


/**
 * optional ProposerPolicy proposer_policy = 63;
 * @return {?proto.sf.antelope.type.v1.ProposerPolicy}
 */
proto.sf.antelope.type.v1.Block.prototype.getProposerPolicy = function() {
  return /** @type{?proto.sf.antelope.type.v1.ProposerPolicy} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.ProposerPolicy, 63));
};


/**
 * @param {?proto.sf.antelope.type.v1.ProposerPolicy|undefined} value
 * @return {!proto.sf.antelope.type.v1.Block} returns this
*/
proto.sf.antelope.type.v1.Block.prototype.setProposerPolicy = function(value) {
  return jspb.Message.setWrapperField(this, 63, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.Block} returns this
 */
proto.sf.antelope.type.v1.Block.prototype.clearProposerPolicy = function() {
  return this.setProposerPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.Block.prototype.hasProposerPolicy = function() {
  return jspb.Message.getField(this, 63) != null;
};


/**
 * optional FinalizerPolicy finalizer_policy = 64;
 * @return {?proto.sf.antelope.type.v1.FinalizerPolicy}
 */
proto.sf.antelope.type.v1.Block.prototype.getFinalizerPolicy = function() {
  return /** @type{?proto.sf.antelope.type.v1.FinalizerPolicy} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.FinalizerPolicy, 64));
};


/**
 * @param {?proto.sf.antelope.type.v1.FinalizerPolicy|undefined} value
 * @return {!proto.sf.antelope.type.v1.Block} returns this
*/
proto.sf.antelope.type.v1.Block.prototype.setFinalizerPolicy = function(value) {
  return jspb.Message.setWrapperField(this, 64, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.Block} returns this
 */
proto.sf.antelope.type.v1.Block.prototype.clearFinalizerPolicy = function() {
  return this.setFinalizerPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.Block.prototype.hasFinalizerPolicy = function() {
  return jspb.Message.getField(this, 64) != null;
};


/**
 * repeated RlimitOp rlimit_ops = 19;
 * @return {!Array<!proto.sf.antelope.type.v1.RlimitOp>}
 */
proto.sf.antelope.type.v1.Block.prototype.getRlimitOpsList = function() {
  return /** @type{!Array<!proto.sf.antelope.type.v1.RlimitOp>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sf.antelope.type.v1.RlimitOp, 19));
};


/**
 * @param {!Array<!proto.sf.antelope.type.v1.RlimitOp>} value
 * @return {!proto.sf.antelope.type.v1.Block} returns this
*/
proto.sf.antelope.type.v1.Block.prototype.setRlimitOpsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 19, value);
};


/**
 * @param {!proto.sf.antelope.type.v1.RlimitOp=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.RlimitOp}
 */
proto.sf.antelope.type.v1.Block.prototype.addRlimitOps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 19, opt_value, proto.sf.antelope.type.v1.RlimitOp, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.Block} returns this
 */
proto.sf.antelope.type.v1.Block.prototype.clearRlimitOpsList = function() {
  return this.setRlimitOpsList([]);
};


/**
 * repeated TransactionReceipt unfiltered_transactions = 6;
 * @return {!Array<!proto.sf.antelope.type.v1.TransactionReceipt>}
 */
proto.sf.antelope.type.v1.Block.prototype.getUnfilteredTransactionsList = function() {
  return /** @type{!Array<!proto.sf.antelope.type.v1.TransactionReceipt>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sf.antelope.type.v1.TransactionReceipt, 6));
};


/**
 * @param {!Array<!proto.sf.antelope.type.v1.TransactionReceipt>} value
 * @return {!proto.sf.antelope.type.v1.Block} returns this
*/
proto.sf.antelope.type.v1.Block.prototype.setUnfilteredTransactionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.sf.antelope.type.v1.TransactionReceipt=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.TransactionReceipt}
 */
proto.sf.antelope.type.v1.Block.prototype.addUnfilteredTransactions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.sf.antelope.type.v1.TransactionReceipt, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.Block} returns this
 */
proto.sf.antelope.type.v1.Block.prototype.clearUnfilteredTransactionsList = function() {
  return this.setUnfilteredTransactionsList([]);
};


/**
 * repeated TransactionReceipt filtered_transactions = 47;
 * @return {!Array<!proto.sf.antelope.type.v1.TransactionReceipt>}
 */
proto.sf.antelope.type.v1.Block.prototype.getFilteredTransactionsList = function() {
  return /** @type{!Array<!proto.sf.antelope.type.v1.TransactionReceipt>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sf.antelope.type.v1.TransactionReceipt, 47));
};


/**
 * @param {!Array<!proto.sf.antelope.type.v1.TransactionReceipt>} value
 * @return {!proto.sf.antelope.type.v1.Block} returns this
*/
proto.sf.antelope.type.v1.Block.prototype.setFilteredTransactionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 47, value);
};


/**
 * @param {!proto.sf.antelope.type.v1.TransactionReceipt=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.TransactionReceipt}
 */
proto.sf.antelope.type.v1.Block.prototype.addFilteredTransactions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 47, opt_value, proto.sf.antelope.type.v1.TransactionReceipt, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.Block} returns this
 */
proto.sf.antelope.type.v1.Block.prototype.clearFilteredTransactionsList = function() {
  return this.setFilteredTransactionsList([]);
};


/**
 * optional uint32 unfiltered_transaction_count = 22;
 * @return {number}
 */
proto.sf.antelope.type.v1.Block.prototype.getUnfilteredTransactionCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.Block} returns this
 */
proto.sf.antelope.type.v1.Block.prototype.setUnfilteredTransactionCount = function(value) {
  return jspb.Message.setProto3IntField(this, 22, value);
};


/**
 * optional uint32 filtered_transaction_count = 48;
 * @return {number}
 */
proto.sf.antelope.type.v1.Block.prototype.getFilteredTransactionCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 48, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.Block} returns this
 */
proto.sf.antelope.type.v1.Block.prototype.setFilteredTransactionCount = function(value) {
  return jspb.Message.setProto3IntField(this, 48, value);
};


/**
 * repeated TrxOp unfiltered_implicit_transaction_ops = 20;
 * @return {!Array<!proto.sf.antelope.type.v1.TrxOp>}
 */
proto.sf.antelope.type.v1.Block.prototype.getUnfilteredImplicitTransactionOpsList = function() {
  return /** @type{!Array<!proto.sf.antelope.type.v1.TrxOp>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sf.antelope.type.v1.TrxOp, 20));
};


/**
 * @param {!Array<!proto.sf.antelope.type.v1.TrxOp>} value
 * @return {!proto.sf.antelope.type.v1.Block} returns this
*/
proto.sf.antelope.type.v1.Block.prototype.setUnfilteredImplicitTransactionOpsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 20, value);
};


/**
 * @param {!proto.sf.antelope.type.v1.TrxOp=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.TrxOp}
 */
proto.sf.antelope.type.v1.Block.prototype.addUnfilteredImplicitTransactionOps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 20, opt_value, proto.sf.antelope.type.v1.TrxOp, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.Block} returns this
 */
proto.sf.antelope.type.v1.Block.prototype.clearUnfilteredImplicitTransactionOpsList = function() {
  return this.setUnfilteredImplicitTransactionOpsList([]);
};


/**
 * repeated TrxOp filtered_implicit_transaction_ops = 49;
 * @return {!Array<!proto.sf.antelope.type.v1.TrxOp>}
 */
proto.sf.antelope.type.v1.Block.prototype.getFilteredImplicitTransactionOpsList = function() {
  return /** @type{!Array<!proto.sf.antelope.type.v1.TrxOp>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sf.antelope.type.v1.TrxOp, 49));
};


/**
 * @param {!Array<!proto.sf.antelope.type.v1.TrxOp>} value
 * @return {!proto.sf.antelope.type.v1.Block} returns this
*/
proto.sf.antelope.type.v1.Block.prototype.setFilteredImplicitTransactionOpsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 49, value);
};


/**
 * @param {!proto.sf.antelope.type.v1.TrxOp=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.TrxOp}
 */
proto.sf.antelope.type.v1.Block.prototype.addFilteredImplicitTransactionOps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 49, opt_value, proto.sf.antelope.type.v1.TrxOp, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.Block} returns this
 */
proto.sf.antelope.type.v1.Block.prototype.clearFilteredImplicitTransactionOpsList = function() {
  return this.setFilteredImplicitTransactionOpsList([]);
};


/**
 * repeated TransactionTrace unfiltered_transaction_traces = 21;
 * @return {!Array<!proto.sf.antelope.type.v1.TransactionTrace>}
 */
proto.sf.antelope.type.v1.Block.prototype.getUnfilteredTransactionTracesList = function() {
  return /** @type{!Array<!proto.sf.antelope.type.v1.TransactionTrace>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sf.antelope.type.v1.TransactionTrace, 21));
};


/**
 * @param {!Array<!proto.sf.antelope.type.v1.TransactionTrace>} value
 * @return {!proto.sf.antelope.type.v1.Block} returns this
*/
proto.sf.antelope.type.v1.Block.prototype.setUnfilteredTransactionTracesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 21, value);
};


/**
 * @param {!proto.sf.antelope.type.v1.TransactionTrace=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.TransactionTrace}
 */
proto.sf.antelope.type.v1.Block.prototype.addUnfilteredTransactionTraces = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 21, opt_value, proto.sf.antelope.type.v1.TransactionTrace, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.Block} returns this
 */
proto.sf.antelope.type.v1.Block.prototype.clearUnfilteredTransactionTracesList = function() {
  return this.setUnfilteredTransactionTracesList([]);
};


/**
 * repeated TransactionTrace filtered_transaction_traces = 46;
 * @return {!Array<!proto.sf.antelope.type.v1.TransactionTrace>}
 */
proto.sf.antelope.type.v1.Block.prototype.getFilteredTransactionTracesList = function() {
  return /** @type{!Array<!proto.sf.antelope.type.v1.TransactionTrace>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sf.antelope.type.v1.TransactionTrace, 46));
};


/**
 * @param {!Array<!proto.sf.antelope.type.v1.TransactionTrace>} value
 * @return {!proto.sf.antelope.type.v1.Block} returns this
*/
proto.sf.antelope.type.v1.Block.prototype.setFilteredTransactionTracesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 46, value);
};


/**
 * @param {!proto.sf.antelope.type.v1.TransactionTrace=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.TransactionTrace}
 */
proto.sf.antelope.type.v1.Block.prototype.addFilteredTransactionTraces = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 46, opt_value, proto.sf.antelope.type.v1.TransactionTrace, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.Block} returns this
 */
proto.sf.antelope.type.v1.Block.prototype.clearFilteredTransactionTracesList = function() {
  return this.setFilteredTransactionTracesList([]);
};


/**
 * optional uint32 unfiltered_transaction_trace_count = 23;
 * @return {number}
 */
proto.sf.antelope.type.v1.Block.prototype.getUnfilteredTransactionTraceCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.Block} returns this
 */
proto.sf.antelope.type.v1.Block.prototype.setUnfilteredTransactionTraceCount = function(value) {
  return jspb.Message.setProto3IntField(this, 23, value);
};


/**
 * optional uint32 filtered_transaction_trace_count = 43;
 * @return {number}
 */
proto.sf.antelope.type.v1.Block.prototype.getFilteredTransactionTraceCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 43, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.Block} returns this
 */
proto.sf.antelope.type.v1.Block.prototype.setFilteredTransactionTraceCount = function(value) {
  return jspb.Message.setProto3IntField(this, 43, value);
};


/**
 * optional uint32 unfiltered_executed_input_action_count = 24;
 * @return {number}
 */
proto.sf.antelope.type.v1.Block.prototype.getUnfilteredExecutedInputActionCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 24, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.Block} returns this
 */
proto.sf.antelope.type.v1.Block.prototype.setUnfilteredExecutedInputActionCount = function(value) {
  return jspb.Message.setProto3IntField(this, 24, value);
};


/**
 * optional uint32 filtered_executed_input_action_count = 44;
 * @return {number}
 */
proto.sf.antelope.type.v1.Block.prototype.getFilteredExecutedInputActionCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 44, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.Block} returns this
 */
proto.sf.antelope.type.v1.Block.prototype.setFilteredExecutedInputActionCount = function(value) {
  return jspb.Message.setProto3IntField(this, 44, value);
};


/**
 * optional uint32 unfiltered_executed_total_action_count = 25;
 * @return {number}
 */
proto.sf.antelope.type.v1.Block.prototype.getUnfilteredExecutedTotalActionCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 25, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.Block} returns this
 */
proto.sf.antelope.type.v1.Block.prototype.setUnfilteredExecutedTotalActionCount = function(value) {
  return jspb.Message.setProto3IntField(this, 25, value);
};


/**
 * optional uint32 filtered_executed_total_action_count = 45;
 * @return {number}
 */
proto.sf.antelope.type.v1.Block.prototype.getFilteredExecutedTotalActionCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 45, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.Block} returns this
 */
proto.sf.antelope.type.v1.Block.prototype.setFilteredExecutedTotalActionCount = function(value) {
  return jspb.Message.setProto3IntField(this, 45, value);
};


/**
 * optional string block_signing_key = 14;
 * @return {string}
 */
proto.sf.antelope.type.v1.Block.prototype.getBlockSigningKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.Block} returns this
 */
proto.sf.antelope.type.v1.Block.prototype.setBlockSigningKey = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional ProducerSchedule active_schedule_v1 = 10;
 * @return {?proto.sf.antelope.type.v1.ProducerSchedule}
 */
proto.sf.antelope.type.v1.Block.prototype.getActiveScheduleV1 = function() {
  return /** @type{?proto.sf.antelope.type.v1.ProducerSchedule} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.ProducerSchedule, 10));
};


/**
 * @param {?proto.sf.antelope.type.v1.ProducerSchedule|undefined} value
 * @return {!proto.sf.antelope.type.v1.Block} returns this
*/
proto.sf.antelope.type.v1.Block.prototype.setActiveScheduleV1 = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.Block} returns this
 */
proto.sf.antelope.type.v1.Block.prototype.clearActiveScheduleV1 = function() {
  return this.setActiveScheduleV1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.Block.prototype.hasActiveScheduleV1 = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional BlockSigningAuthority valid_block_signing_authority_v2 = 30;
 * @return {?proto.sf.antelope.type.v1.BlockSigningAuthority}
 */
proto.sf.antelope.type.v1.Block.prototype.getValidBlockSigningAuthorityV2 = function() {
  return /** @type{?proto.sf.antelope.type.v1.BlockSigningAuthority} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.BlockSigningAuthority, 30));
};


/**
 * @param {?proto.sf.antelope.type.v1.BlockSigningAuthority|undefined} value
 * @return {!proto.sf.antelope.type.v1.Block} returns this
*/
proto.sf.antelope.type.v1.Block.prototype.setValidBlockSigningAuthorityV2 = function(value) {
  return jspb.Message.setWrapperField(this, 30, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.Block} returns this
 */
proto.sf.antelope.type.v1.Block.prototype.clearValidBlockSigningAuthorityV2 = function() {
  return this.setValidBlockSigningAuthorityV2(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.Block.prototype.hasValidBlockSigningAuthorityV2 = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional ProducerAuthoritySchedule active_schedule_v2 = 31;
 * @return {?proto.sf.antelope.type.v1.ProducerAuthoritySchedule}
 */
proto.sf.antelope.type.v1.Block.prototype.getActiveScheduleV2 = function() {
  return /** @type{?proto.sf.antelope.type.v1.ProducerAuthoritySchedule} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.ProducerAuthoritySchedule, 31));
};


/**
 * @param {?proto.sf.antelope.type.v1.ProducerAuthoritySchedule|undefined} value
 * @return {!proto.sf.antelope.type.v1.Block} returns this
*/
proto.sf.antelope.type.v1.Block.prototype.setActiveScheduleV2 = function(value) {
  return jspb.Message.setWrapperField(this, 31, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.Block} returns this
 */
proto.sf.antelope.type.v1.Block.prototype.clearActiveScheduleV2 = function() {
  return this.setActiveScheduleV2(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.Block.prototype.hasActiveScheduleV2 = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional bool filtering_applied = 40;
 * @return {boolean}
 */
proto.sf.antelope.type.v1.Block.prototype.getFilteringApplied = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 40, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sf.antelope.type.v1.Block} returns this
 */
proto.sf.antelope.type.v1.Block.prototype.setFilteringApplied = function(value) {
  return jspb.Message.setProto3BooleanField(this, 40, value);
};


/**
 * optional string filtering_include_filter_expr = 41;
 * @return {string}
 */
proto.sf.antelope.type.v1.Block.prototype.getFilteringIncludeFilterExpr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 41, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.Block} returns this
 */
proto.sf.antelope.type.v1.Block.prototype.setFilteringIncludeFilterExpr = function(value) {
  return jspb.Message.setProto3StringField(this, 41, value);
};


/**
 * optional string filtering_exclude_filter_expr = 42;
 * @return {string}
 */
proto.sf.antelope.type.v1.Block.prototype.getFilteringExcludeFilterExpr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 42, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.Block} returns this
 */
proto.sf.antelope.type.v1.Block.prototype.setFilteringExcludeFilterExpr = function(value) {
  return jspb.Message.setProto3StringField(this, 42, value);
};


/**
 * optional string filtering_system_actions_include_filter_expr = 50;
 * @return {string}
 */
proto.sf.antelope.type.v1.Block.prototype.getFilteringSystemActionsIncludeFilterExpr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 50, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.Block} returns this
 */
proto.sf.antelope.type.v1.Block.prototype.setFilteringSystemActionsIncludeFilterExpr = function(value) {
  return jspb.Message.setProto3StringField(this, 50, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.FinalityData.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.FinalityData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.FinalityData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.FinalityData.toObject = function(includeInstance, msg) {
  var f, obj = {
    majorVersion: jspb.Message.getFieldWithDefault(msg, 1, 0),
    minorVersion: jspb.Message.getFieldWithDefault(msg, 2, 0),
    activeFinalizerPolicyGeneration: jspb.Message.getFieldWithDefault(msg, 3, 0),
    actionMroot: msg.getActionMroot_asB64(),
    reversibleBlocksMroot: msg.getReversibleBlocksMroot_asB64(),
    latestQcClaimBlockNum: jspb.Message.getFieldWithDefault(msg, 6, 0),
    latestQcClaimFinalityDigest: msg.getLatestQcClaimFinalityDigest_asB64(),
    latestQcClaimTimestamp: (f = msg.getLatestQcClaimTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    baseDigest: msg.getBaseDigest_asB64(),
    pendingFinalizerPolicy: (f = msg.getPendingFinalizerPolicy()) && proto.sf.antelope.type.v1.FinalizerPolicy.toObject(includeInstance, f),
    lastPendingFinalizerPolicyGeneration: jspb.Message.getFieldWithDefault(msg, 11, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.FinalityData}
 */
proto.sf.antelope.type.v1.FinalityData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.FinalityData;
  return proto.sf.antelope.type.v1.FinalityData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.FinalityData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.FinalityData}
 */
proto.sf.antelope.type.v1.FinalityData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMajorVersion(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMinorVersion(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setActiveFinalizerPolicyGeneration(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setActionMroot(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setReversibleBlocksMroot(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLatestQcClaimBlockNum(value);
      break;
    case 7:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setLatestQcClaimFinalityDigest(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLatestQcClaimTimestamp(value);
      break;
    case 9:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBaseDigest(value);
      break;
    case 10:
      var value = new proto.sf.antelope.type.v1.FinalizerPolicy;
      reader.readMessage(value,proto.sf.antelope.type.v1.FinalizerPolicy.deserializeBinaryFromReader);
      msg.setPendingFinalizerPolicy(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLastPendingFinalizerPolicyGeneration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.FinalityData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.FinalityData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.FinalityData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.FinalityData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMajorVersion();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getMinorVersion();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getActiveFinalizerPolicyGeneration();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getActionMroot_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getReversibleBlocksMroot_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = message.getLatestQcClaimBlockNum();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getLatestQcClaimFinalityDigest_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      7,
      f
    );
  }
  f = message.getLatestQcClaimTimestamp();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getBaseDigest_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      9,
      f
    );
  }
  f = message.getPendingFinalizerPolicy();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.sf.antelope.type.v1.FinalizerPolicy.serializeBinaryToWriter
    );
  }
  f = message.getLastPendingFinalizerPolicyGeneration();
  if (f !== 0) {
    writer.writeUint32(
      11,
      f
    );
  }
};


/**
 * optional uint32 major_version = 1;
 * @return {number}
 */
proto.sf.antelope.type.v1.FinalityData.prototype.getMajorVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.FinalityData} returns this
 */
proto.sf.antelope.type.v1.FinalityData.prototype.setMajorVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 minor_version = 2;
 * @return {number}
 */
proto.sf.antelope.type.v1.FinalityData.prototype.getMinorVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.FinalityData} returns this
 */
proto.sf.antelope.type.v1.FinalityData.prototype.setMinorVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 active_finalizer_policy_generation = 3;
 * @return {number}
 */
proto.sf.antelope.type.v1.FinalityData.prototype.getActiveFinalizerPolicyGeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.FinalityData} returns this
 */
proto.sf.antelope.type.v1.FinalityData.prototype.setActiveFinalizerPolicyGeneration = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bytes action_mroot = 4;
 * @return {!(string|Uint8Array)}
 */
proto.sf.antelope.type.v1.FinalityData.prototype.getActionMroot = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes action_mroot = 4;
 * This is a type-conversion wrapper around `getActionMroot()`
 * @return {string}
 */
proto.sf.antelope.type.v1.FinalityData.prototype.getActionMroot_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getActionMroot()));
};


/**
 * optional bytes action_mroot = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getActionMroot()`
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.FinalityData.prototype.getActionMroot_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getActionMroot()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sf.antelope.type.v1.FinalityData} returns this
 */
proto.sf.antelope.type.v1.FinalityData.prototype.setActionMroot = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional bytes reversible_blocks_mroot = 5;
 * @return {!(string|Uint8Array)}
 */
proto.sf.antelope.type.v1.FinalityData.prototype.getReversibleBlocksMroot = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes reversible_blocks_mroot = 5;
 * This is a type-conversion wrapper around `getReversibleBlocksMroot()`
 * @return {string}
 */
proto.sf.antelope.type.v1.FinalityData.prototype.getReversibleBlocksMroot_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getReversibleBlocksMroot()));
};


/**
 * optional bytes reversible_blocks_mroot = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getReversibleBlocksMroot()`
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.FinalityData.prototype.getReversibleBlocksMroot_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getReversibleBlocksMroot()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sf.antelope.type.v1.FinalityData} returns this
 */
proto.sf.antelope.type.v1.FinalityData.prototype.setReversibleBlocksMroot = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * optional uint32 latest_qc_claim_block_num = 6;
 * @return {number}
 */
proto.sf.antelope.type.v1.FinalityData.prototype.getLatestQcClaimBlockNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.FinalityData} returns this
 */
proto.sf.antelope.type.v1.FinalityData.prototype.setLatestQcClaimBlockNum = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional bytes latest_qc_claim_finality_digest = 7;
 * @return {!(string|Uint8Array)}
 */
proto.sf.antelope.type.v1.FinalityData.prototype.getLatestQcClaimFinalityDigest = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes latest_qc_claim_finality_digest = 7;
 * This is a type-conversion wrapper around `getLatestQcClaimFinalityDigest()`
 * @return {string}
 */
proto.sf.antelope.type.v1.FinalityData.prototype.getLatestQcClaimFinalityDigest_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getLatestQcClaimFinalityDigest()));
};


/**
 * optional bytes latest_qc_claim_finality_digest = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getLatestQcClaimFinalityDigest()`
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.FinalityData.prototype.getLatestQcClaimFinalityDigest_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getLatestQcClaimFinalityDigest()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sf.antelope.type.v1.FinalityData} returns this
 */
proto.sf.antelope.type.v1.FinalityData.prototype.setLatestQcClaimFinalityDigest = function(value) {
  return jspb.Message.setProto3BytesField(this, 7, value);
};


/**
 * optional google.protobuf.Timestamp latest_qc_claim_timestamp = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.sf.antelope.type.v1.FinalityData.prototype.getLatestQcClaimTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.sf.antelope.type.v1.FinalityData} returns this
*/
proto.sf.antelope.type.v1.FinalityData.prototype.setLatestQcClaimTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.FinalityData} returns this
 */
proto.sf.antelope.type.v1.FinalityData.prototype.clearLatestQcClaimTimestamp = function() {
  return this.setLatestQcClaimTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.FinalityData.prototype.hasLatestQcClaimTimestamp = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bytes base_digest = 9;
 * @return {!(string|Uint8Array)}
 */
proto.sf.antelope.type.v1.FinalityData.prototype.getBaseDigest = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * optional bytes base_digest = 9;
 * This is a type-conversion wrapper around `getBaseDigest()`
 * @return {string}
 */
proto.sf.antelope.type.v1.FinalityData.prototype.getBaseDigest_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBaseDigest()));
};


/**
 * optional bytes base_digest = 9;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBaseDigest()`
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.FinalityData.prototype.getBaseDigest_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBaseDigest()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sf.antelope.type.v1.FinalityData} returns this
 */
proto.sf.antelope.type.v1.FinalityData.prototype.setBaseDigest = function(value) {
  return jspb.Message.setProto3BytesField(this, 9, value);
};


/**
 * optional FinalizerPolicy pending_finalizer_policy = 10;
 * @return {?proto.sf.antelope.type.v1.FinalizerPolicy}
 */
proto.sf.antelope.type.v1.FinalityData.prototype.getPendingFinalizerPolicy = function() {
  return /** @type{?proto.sf.antelope.type.v1.FinalizerPolicy} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.FinalizerPolicy, 10));
};


/**
 * @param {?proto.sf.antelope.type.v1.FinalizerPolicy|undefined} value
 * @return {!proto.sf.antelope.type.v1.FinalityData} returns this
*/
proto.sf.antelope.type.v1.FinalityData.prototype.setPendingFinalizerPolicy = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.FinalityData} returns this
 */
proto.sf.antelope.type.v1.FinalityData.prototype.clearPendingFinalizerPolicy = function() {
  return this.setPendingFinalizerPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.FinalityData.prototype.hasPendingFinalizerPolicy = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional uint32 last_pending_finalizer_policy_generation = 11;
 * @return {number}
 */
proto.sf.antelope.type.v1.FinalityData.prototype.getLastPendingFinalizerPolicyGeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.FinalityData} returns this
 */
proto.sf.antelope.type.v1.FinalityData.prototype.setLastPendingFinalizerPolicyGeneration = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sf.antelope.type.v1.FinalizerPolicy.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.FinalizerPolicy.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.FinalizerPolicy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.FinalizerPolicy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.FinalizerPolicy.toObject = function(includeInstance, msg) {
  var f, obj = {
    generation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    threshold: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    finalizersList: jspb.Message.toObjectList(msg.getFinalizersList(),
    proto.sf.antelope.type.v1.FinalizerAuthority.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.FinalizerPolicy}
 */
proto.sf.antelope.type.v1.FinalizerPolicy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.FinalizerPolicy;
  return proto.sf.antelope.type.v1.FinalizerPolicy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.FinalizerPolicy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.FinalizerPolicy}
 */
proto.sf.antelope.type.v1.FinalizerPolicy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGeneration(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setThreshold(value);
      break;
    case 3:
      var value = new proto.sf.antelope.type.v1.FinalizerAuthority;
      reader.readMessage(value,proto.sf.antelope.type.v1.FinalizerAuthority.deserializeBinaryFromReader);
      msg.addFinalizers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.FinalizerPolicy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.FinalizerPolicy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.FinalizerPolicy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.FinalizerPolicy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeneration();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getThreshold();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      2,
      f
    );
  }
  f = message.getFinalizersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.sf.antelope.type.v1.FinalizerAuthority.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 generation = 1;
 * @return {number}
 */
proto.sf.antelope.type.v1.FinalizerPolicy.prototype.getGeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.FinalizerPolicy} returns this
 */
proto.sf.antelope.type.v1.FinalizerPolicy.prototype.setGeneration = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 threshold = 2;
 * @return {string}
 */
proto.sf.antelope.type.v1.FinalizerPolicy.prototype.getThreshold = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.FinalizerPolicy} returns this
 */
proto.sf.antelope.type.v1.FinalizerPolicy.prototype.setThreshold = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * repeated FinalizerAuthority finalizers = 3;
 * @return {!Array<!proto.sf.antelope.type.v1.FinalizerAuthority>}
 */
proto.sf.antelope.type.v1.FinalizerPolicy.prototype.getFinalizersList = function() {
  return /** @type{!Array<!proto.sf.antelope.type.v1.FinalizerAuthority>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sf.antelope.type.v1.FinalizerAuthority, 3));
};


/**
 * @param {!Array<!proto.sf.antelope.type.v1.FinalizerAuthority>} value
 * @return {!proto.sf.antelope.type.v1.FinalizerPolicy} returns this
*/
proto.sf.antelope.type.v1.FinalizerPolicy.prototype.setFinalizersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.sf.antelope.type.v1.FinalizerAuthority=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.FinalizerAuthority}
 */
proto.sf.antelope.type.v1.FinalizerPolicy.prototype.addFinalizers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.sf.antelope.type.v1.FinalizerAuthority, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.FinalizerPolicy} returns this
 */
proto.sf.antelope.type.v1.FinalizerPolicy.prototype.clearFinalizersList = function() {
  return this.setFinalizersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.FinalizerAuthority.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.FinalizerAuthority.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.FinalizerAuthority} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.FinalizerAuthority.toObject = function(includeInstance, msg) {
  var f, obj = {
    description: jspb.Message.getFieldWithDefault(msg, 1, ""),
    weight: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    publicKey: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.FinalizerAuthority}
 */
proto.sf.antelope.type.v1.FinalizerAuthority.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.FinalizerAuthority;
  return proto.sf.antelope.type.v1.FinalizerAuthority.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.FinalizerAuthority} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.FinalizerAuthority}
 */
proto.sf.antelope.type.v1.FinalizerAuthority.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setWeight(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublicKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.FinalizerAuthority.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.FinalizerAuthority.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.FinalizerAuthority} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.FinalizerAuthority.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWeight();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      2,
      f
    );
  }
  f = message.getPublicKey();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string description = 1;
 * @return {string}
 */
proto.sf.antelope.type.v1.FinalizerAuthority.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.FinalizerAuthority} returns this
 */
proto.sf.antelope.type.v1.FinalizerAuthority.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 weight = 2;
 * @return {string}
 */
proto.sf.antelope.type.v1.FinalizerAuthority.prototype.getWeight = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.FinalizerAuthority} returns this
 */
proto.sf.antelope.type.v1.FinalizerAuthority.prototype.setWeight = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional string public_key = 3;
 * @return {string}
 */
proto.sf.antelope.type.v1.FinalizerAuthority.prototype.getPublicKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.FinalizerAuthority} returns this
 */
proto.sf.antelope.type.v1.FinalizerAuthority.prototype.setPublicKey = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.BlockWithRefs.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.BlockWithRefs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.BlockWithRefs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.BlockWithRefs.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    block: (f = msg.getBlock()) && proto.sf.antelope.type.v1.Block.toObject(includeInstance, f),
    implicitTransactionRefs: (f = msg.getImplicitTransactionRefs()) && proto.sf.antelope.type.v1.TransactionRefs.toObject(includeInstance, f),
    transactionRefs: (f = msg.getTransactionRefs()) && proto.sf.antelope.type.v1.TransactionRefs.toObject(includeInstance, f),
    transactionTraceRefs: (f = msg.getTransactionTraceRefs()) && proto.sf.antelope.type.v1.TransactionRefs.toObject(includeInstance, f),
    irreversible: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.BlockWithRefs}
 */
proto.sf.antelope.type.v1.BlockWithRefs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.BlockWithRefs;
  return proto.sf.antelope.type.v1.BlockWithRefs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.BlockWithRefs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.BlockWithRefs}
 */
proto.sf.antelope.type.v1.BlockWithRefs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.sf.antelope.type.v1.Block;
      reader.readMessage(value,proto.sf.antelope.type.v1.Block.deserializeBinaryFromReader);
      msg.setBlock(value);
      break;
    case 3:
      var value = new proto.sf.antelope.type.v1.TransactionRefs;
      reader.readMessage(value,proto.sf.antelope.type.v1.TransactionRefs.deserializeBinaryFromReader);
      msg.setImplicitTransactionRefs(value);
      break;
    case 4:
      var value = new proto.sf.antelope.type.v1.TransactionRefs;
      reader.readMessage(value,proto.sf.antelope.type.v1.TransactionRefs.deserializeBinaryFromReader);
      msg.setTransactionRefs(value);
      break;
    case 5:
      var value = new proto.sf.antelope.type.v1.TransactionRefs;
      reader.readMessage(value,proto.sf.antelope.type.v1.TransactionRefs.deserializeBinaryFromReader);
      msg.setTransactionTraceRefs(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIrreversible(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.BlockWithRefs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.BlockWithRefs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.BlockWithRefs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.BlockWithRefs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlock();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sf.antelope.type.v1.Block.serializeBinaryToWriter
    );
  }
  f = message.getImplicitTransactionRefs();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.sf.antelope.type.v1.TransactionRefs.serializeBinaryToWriter
    );
  }
  f = message.getTransactionRefs();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.sf.antelope.type.v1.TransactionRefs.serializeBinaryToWriter
    );
  }
  f = message.getTransactionTraceRefs();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.sf.antelope.type.v1.TransactionRefs.serializeBinaryToWriter
    );
  }
  f = message.getIrreversible();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.sf.antelope.type.v1.BlockWithRefs.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.BlockWithRefs} returns this
 */
proto.sf.antelope.type.v1.BlockWithRefs.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Block block = 2;
 * @return {?proto.sf.antelope.type.v1.Block}
 */
proto.sf.antelope.type.v1.BlockWithRefs.prototype.getBlock = function() {
  return /** @type{?proto.sf.antelope.type.v1.Block} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.Block, 2));
};


/**
 * @param {?proto.sf.antelope.type.v1.Block|undefined} value
 * @return {!proto.sf.antelope.type.v1.BlockWithRefs} returns this
*/
proto.sf.antelope.type.v1.BlockWithRefs.prototype.setBlock = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.BlockWithRefs} returns this
 */
proto.sf.antelope.type.v1.BlockWithRefs.prototype.clearBlock = function() {
  return this.setBlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.BlockWithRefs.prototype.hasBlock = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional TransactionRefs implicit_transaction_refs = 3;
 * @return {?proto.sf.antelope.type.v1.TransactionRefs}
 */
proto.sf.antelope.type.v1.BlockWithRefs.prototype.getImplicitTransactionRefs = function() {
  return /** @type{?proto.sf.antelope.type.v1.TransactionRefs} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.TransactionRefs, 3));
};


/**
 * @param {?proto.sf.antelope.type.v1.TransactionRefs|undefined} value
 * @return {!proto.sf.antelope.type.v1.BlockWithRefs} returns this
*/
proto.sf.antelope.type.v1.BlockWithRefs.prototype.setImplicitTransactionRefs = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.BlockWithRefs} returns this
 */
proto.sf.antelope.type.v1.BlockWithRefs.prototype.clearImplicitTransactionRefs = function() {
  return this.setImplicitTransactionRefs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.BlockWithRefs.prototype.hasImplicitTransactionRefs = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional TransactionRefs transaction_refs = 4;
 * @return {?proto.sf.antelope.type.v1.TransactionRefs}
 */
proto.sf.antelope.type.v1.BlockWithRefs.prototype.getTransactionRefs = function() {
  return /** @type{?proto.sf.antelope.type.v1.TransactionRefs} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.TransactionRefs, 4));
};


/**
 * @param {?proto.sf.antelope.type.v1.TransactionRefs|undefined} value
 * @return {!proto.sf.antelope.type.v1.BlockWithRefs} returns this
*/
proto.sf.antelope.type.v1.BlockWithRefs.prototype.setTransactionRefs = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.BlockWithRefs} returns this
 */
proto.sf.antelope.type.v1.BlockWithRefs.prototype.clearTransactionRefs = function() {
  return this.setTransactionRefs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.BlockWithRefs.prototype.hasTransactionRefs = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional TransactionRefs transaction_trace_refs = 5;
 * @return {?proto.sf.antelope.type.v1.TransactionRefs}
 */
proto.sf.antelope.type.v1.BlockWithRefs.prototype.getTransactionTraceRefs = function() {
  return /** @type{?proto.sf.antelope.type.v1.TransactionRefs} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.TransactionRefs, 5));
};


/**
 * @param {?proto.sf.antelope.type.v1.TransactionRefs|undefined} value
 * @return {!proto.sf.antelope.type.v1.BlockWithRefs} returns this
*/
proto.sf.antelope.type.v1.BlockWithRefs.prototype.setTransactionTraceRefs = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.BlockWithRefs} returns this
 */
proto.sf.antelope.type.v1.BlockWithRefs.prototype.clearTransactionTraceRefs = function() {
  return this.setTransactionTraceRefs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.BlockWithRefs.prototype.hasTransactionTraceRefs = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool irreversible = 6;
 * @return {boolean}
 */
proto.sf.antelope.type.v1.BlockWithRefs.prototype.getIrreversible = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sf.antelope.type.v1.BlockWithRefs} returns this
 */
proto.sf.antelope.type.v1.BlockWithRefs.prototype.setIrreversible = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sf.antelope.type.v1.TransactionRefs.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.TransactionRefs.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.TransactionRefs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.TransactionRefs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.TransactionRefs.toObject = function(includeInstance, msg) {
  var f, obj = {
    hashesList: msg.getHashesList_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.TransactionRefs}
 */
proto.sf.antelope.type.v1.TransactionRefs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.TransactionRefs;
  return proto.sf.antelope.type.v1.TransactionRefs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.TransactionRefs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.TransactionRefs}
 */
proto.sf.antelope.type.v1.TransactionRefs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addHashes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.TransactionRefs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.TransactionRefs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.TransactionRefs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.TransactionRefs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHashesList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      1,
      f
    );
  }
};


/**
 * repeated bytes hashes = 1;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.sf.antelope.type.v1.TransactionRefs.prototype.getHashesList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * repeated bytes hashes = 1;
 * This is a type-conversion wrapper around `getHashesList()`
 * @return {!Array<string>}
 */
proto.sf.antelope.type.v1.TransactionRefs.prototype.getHashesList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getHashesList()));
};


/**
 * repeated bytes hashes = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getHashesList()`
 * @return {!Array<!Uint8Array>}
 */
proto.sf.antelope.type.v1.TransactionRefs.prototype.getHashesList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getHashesList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.sf.antelope.type.v1.TransactionRefs} returns this
 */
proto.sf.antelope.type.v1.TransactionRefs.prototype.setHashesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.TransactionRefs} returns this
 */
proto.sf.antelope.type.v1.TransactionRefs.prototype.addHashes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.TransactionRefs} returns this
 */
proto.sf.antelope.type.v1.TransactionRefs.prototype.clearHashesList = function() {
  return this.setHashesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sf.antelope.type.v1.ActivatedProtocolFeatures.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.ActivatedProtocolFeatures.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.ActivatedProtocolFeatures.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.ActivatedProtocolFeatures} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.ActivatedProtocolFeatures.toObject = function(includeInstance, msg) {
  var f, obj = {
    protocolFeaturesList: msg.getProtocolFeaturesList_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.ActivatedProtocolFeatures}
 */
proto.sf.antelope.type.v1.ActivatedProtocolFeatures.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.ActivatedProtocolFeatures;
  return proto.sf.antelope.type.v1.ActivatedProtocolFeatures.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.ActivatedProtocolFeatures} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.ActivatedProtocolFeatures}
 */
proto.sf.antelope.type.v1.ActivatedProtocolFeatures.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addProtocolFeatures(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.ActivatedProtocolFeatures.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.ActivatedProtocolFeatures.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.ActivatedProtocolFeatures} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.ActivatedProtocolFeatures.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProtocolFeaturesList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      1,
      f
    );
  }
};


/**
 * repeated bytes protocol_features = 1;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.sf.antelope.type.v1.ActivatedProtocolFeatures.prototype.getProtocolFeaturesList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * repeated bytes protocol_features = 1;
 * This is a type-conversion wrapper around `getProtocolFeaturesList()`
 * @return {!Array<string>}
 */
proto.sf.antelope.type.v1.ActivatedProtocolFeatures.prototype.getProtocolFeaturesList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getProtocolFeaturesList()));
};


/**
 * repeated bytes protocol_features = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getProtocolFeaturesList()`
 * @return {!Array<!Uint8Array>}
 */
proto.sf.antelope.type.v1.ActivatedProtocolFeatures.prototype.getProtocolFeaturesList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getProtocolFeaturesList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.sf.antelope.type.v1.ActivatedProtocolFeatures} returns this
 */
proto.sf.antelope.type.v1.ActivatedProtocolFeatures.prototype.setProtocolFeaturesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.ActivatedProtocolFeatures} returns this
 */
proto.sf.antelope.type.v1.ActivatedProtocolFeatures.prototype.addProtocolFeatures = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.ActivatedProtocolFeatures} returns this
 */
proto.sf.antelope.type.v1.ActivatedProtocolFeatures.prototype.clearProtocolFeaturesList = function() {
  return this.setProtocolFeaturesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.PendingProducerSchedule.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.PendingProducerSchedule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.PendingProducerSchedule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.PendingProducerSchedule.toObject = function(includeInstance, msg) {
  var f, obj = {
    scheduleLibNum: jspb.Message.getFieldWithDefault(msg, 1, 0),
    scheduleHash: msg.getScheduleHash_asB64(),
    scheduleV1: (f = msg.getScheduleV1()) && proto.sf.antelope.type.v1.ProducerSchedule.toObject(includeInstance, f),
    scheduleV2: (f = msg.getScheduleV2()) && proto.sf.antelope.type.v1.ProducerAuthoritySchedule.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.PendingProducerSchedule}
 */
proto.sf.antelope.type.v1.PendingProducerSchedule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.PendingProducerSchedule;
  return proto.sf.antelope.type.v1.PendingProducerSchedule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.PendingProducerSchedule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.PendingProducerSchedule}
 */
proto.sf.antelope.type.v1.PendingProducerSchedule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setScheduleLibNum(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setScheduleHash(value);
      break;
    case 3:
      var value = new proto.sf.antelope.type.v1.ProducerSchedule;
      reader.readMessage(value,proto.sf.antelope.type.v1.ProducerSchedule.deserializeBinaryFromReader);
      msg.setScheduleV1(value);
      break;
    case 4:
      var value = new proto.sf.antelope.type.v1.ProducerAuthoritySchedule;
      reader.readMessage(value,proto.sf.antelope.type.v1.ProducerAuthoritySchedule.deserializeBinaryFromReader);
      msg.setScheduleV2(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.PendingProducerSchedule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.PendingProducerSchedule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.PendingProducerSchedule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.PendingProducerSchedule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScheduleLibNum();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getScheduleHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getScheduleV1();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.sf.antelope.type.v1.ProducerSchedule.serializeBinaryToWriter
    );
  }
  f = message.getScheduleV2();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.sf.antelope.type.v1.ProducerAuthoritySchedule.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 schedule_lib_num = 1;
 * @return {number}
 */
proto.sf.antelope.type.v1.PendingProducerSchedule.prototype.getScheduleLibNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.PendingProducerSchedule} returns this
 */
proto.sf.antelope.type.v1.PendingProducerSchedule.prototype.setScheduleLibNum = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes schedule_hash = 2;
 * @return {!(string|Uint8Array)}
 */
proto.sf.antelope.type.v1.PendingProducerSchedule.prototype.getScheduleHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes schedule_hash = 2;
 * This is a type-conversion wrapper around `getScheduleHash()`
 * @return {string}
 */
proto.sf.antelope.type.v1.PendingProducerSchedule.prototype.getScheduleHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getScheduleHash()));
};


/**
 * optional bytes schedule_hash = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getScheduleHash()`
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.PendingProducerSchedule.prototype.getScheduleHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getScheduleHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sf.antelope.type.v1.PendingProducerSchedule} returns this
 */
proto.sf.antelope.type.v1.PendingProducerSchedule.prototype.setScheduleHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional ProducerSchedule schedule_v1 = 3;
 * @return {?proto.sf.antelope.type.v1.ProducerSchedule}
 */
proto.sf.antelope.type.v1.PendingProducerSchedule.prototype.getScheduleV1 = function() {
  return /** @type{?proto.sf.antelope.type.v1.ProducerSchedule} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.ProducerSchedule, 3));
};


/**
 * @param {?proto.sf.antelope.type.v1.ProducerSchedule|undefined} value
 * @return {!proto.sf.antelope.type.v1.PendingProducerSchedule} returns this
*/
proto.sf.antelope.type.v1.PendingProducerSchedule.prototype.setScheduleV1 = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.PendingProducerSchedule} returns this
 */
proto.sf.antelope.type.v1.PendingProducerSchedule.prototype.clearScheduleV1 = function() {
  return this.setScheduleV1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.PendingProducerSchedule.prototype.hasScheduleV1 = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ProducerAuthoritySchedule schedule_v2 = 4;
 * @return {?proto.sf.antelope.type.v1.ProducerAuthoritySchedule}
 */
proto.sf.antelope.type.v1.PendingProducerSchedule.prototype.getScheduleV2 = function() {
  return /** @type{?proto.sf.antelope.type.v1.ProducerAuthoritySchedule} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.ProducerAuthoritySchedule, 4));
};


/**
 * @param {?proto.sf.antelope.type.v1.ProducerAuthoritySchedule|undefined} value
 * @return {!proto.sf.antelope.type.v1.PendingProducerSchedule} returns this
*/
proto.sf.antelope.type.v1.PendingProducerSchedule.prototype.setScheduleV2 = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.PendingProducerSchedule} returns this
 */
proto.sf.antelope.type.v1.PendingProducerSchedule.prototype.clearScheduleV2 = function() {
  return this.setScheduleV2(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.PendingProducerSchedule.prototype.hasScheduleV2 = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sf.antelope.type.v1.ProducerSchedule.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.ProducerSchedule.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.ProducerSchedule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.ProducerSchedule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.ProducerSchedule.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, 0),
    producersList: jspb.Message.toObjectList(msg.getProducersList(),
    proto.sf.antelope.type.v1.ProducerKey.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.ProducerSchedule}
 */
proto.sf.antelope.type.v1.ProducerSchedule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.ProducerSchedule;
  return proto.sf.antelope.type.v1.ProducerSchedule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.ProducerSchedule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.ProducerSchedule}
 */
proto.sf.antelope.type.v1.ProducerSchedule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVersion(value);
      break;
    case 2:
      var value = new proto.sf.antelope.type.v1.ProducerKey;
      reader.readMessage(value,proto.sf.antelope.type.v1.ProducerKey.deserializeBinaryFromReader);
      msg.addProducers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.ProducerSchedule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.ProducerSchedule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.ProducerSchedule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.ProducerSchedule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getProducersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.sf.antelope.type.v1.ProducerKey.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 version = 1;
 * @return {number}
 */
proto.sf.antelope.type.v1.ProducerSchedule.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.ProducerSchedule} returns this
 */
proto.sf.antelope.type.v1.ProducerSchedule.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated ProducerKey producers = 2;
 * @return {!Array<!proto.sf.antelope.type.v1.ProducerKey>}
 */
proto.sf.antelope.type.v1.ProducerSchedule.prototype.getProducersList = function() {
  return /** @type{!Array<!proto.sf.antelope.type.v1.ProducerKey>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sf.antelope.type.v1.ProducerKey, 2));
};


/**
 * @param {!Array<!proto.sf.antelope.type.v1.ProducerKey>} value
 * @return {!proto.sf.antelope.type.v1.ProducerSchedule} returns this
*/
proto.sf.antelope.type.v1.ProducerSchedule.prototype.setProducersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.sf.antelope.type.v1.ProducerKey=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.ProducerKey}
 */
proto.sf.antelope.type.v1.ProducerSchedule.prototype.addProducers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.sf.antelope.type.v1.ProducerKey, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.ProducerSchedule} returns this
 */
proto.sf.antelope.type.v1.ProducerSchedule.prototype.clearProducersList = function() {
  return this.setProducersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.ProducerKey.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.ProducerKey.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.ProducerKey} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.ProducerKey.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blockSigningKey: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.ProducerKey}
 */
proto.sf.antelope.type.v1.ProducerKey.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.ProducerKey;
  return proto.sf.antelope.type.v1.ProducerKey.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.ProducerKey} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.ProducerKey}
 */
proto.sf.antelope.type.v1.ProducerKey.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlockSigningKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.ProducerKey.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.ProducerKey.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.ProducerKey} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.ProducerKey.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlockSigningKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string account_name = 1;
 * @return {string}
 */
proto.sf.antelope.type.v1.ProducerKey.prototype.getAccountName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.ProducerKey} returns this
 */
proto.sf.antelope.type.v1.ProducerKey.prototype.setAccountName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string block_signing_key = 2;
 * @return {string}
 */
proto.sf.antelope.type.v1.ProducerKey.prototype.getBlockSigningKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.ProducerKey} returns this
 */
proto.sf.antelope.type.v1.ProducerKey.prototype.setBlockSigningKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sf.antelope.type.v1.ProducerAuthoritySchedule.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.ProducerAuthoritySchedule.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.ProducerAuthoritySchedule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.ProducerAuthoritySchedule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.ProducerAuthoritySchedule.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, 0),
    producersList: jspb.Message.toObjectList(msg.getProducersList(),
    proto.sf.antelope.type.v1.ProducerAuthority.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.ProducerAuthoritySchedule}
 */
proto.sf.antelope.type.v1.ProducerAuthoritySchedule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.ProducerAuthoritySchedule;
  return proto.sf.antelope.type.v1.ProducerAuthoritySchedule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.ProducerAuthoritySchedule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.ProducerAuthoritySchedule}
 */
proto.sf.antelope.type.v1.ProducerAuthoritySchedule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVersion(value);
      break;
    case 2:
      var value = new proto.sf.antelope.type.v1.ProducerAuthority;
      reader.readMessage(value,proto.sf.antelope.type.v1.ProducerAuthority.deserializeBinaryFromReader);
      msg.addProducers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.ProducerAuthoritySchedule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.ProducerAuthoritySchedule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.ProducerAuthoritySchedule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.ProducerAuthoritySchedule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getProducersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.sf.antelope.type.v1.ProducerAuthority.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 version = 1;
 * @return {number}
 */
proto.sf.antelope.type.v1.ProducerAuthoritySchedule.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.ProducerAuthoritySchedule} returns this
 */
proto.sf.antelope.type.v1.ProducerAuthoritySchedule.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated ProducerAuthority producers = 2;
 * @return {!Array<!proto.sf.antelope.type.v1.ProducerAuthority>}
 */
proto.sf.antelope.type.v1.ProducerAuthoritySchedule.prototype.getProducersList = function() {
  return /** @type{!Array<!proto.sf.antelope.type.v1.ProducerAuthority>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sf.antelope.type.v1.ProducerAuthority, 2));
};


/**
 * @param {!Array<!proto.sf.antelope.type.v1.ProducerAuthority>} value
 * @return {!proto.sf.antelope.type.v1.ProducerAuthoritySchedule} returns this
*/
proto.sf.antelope.type.v1.ProducerAuthoritySchedule.prototype.setProducersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.sf.antelope.type.v1.ProducerAuthority=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.ProducerAuthority}
 */
proto.sf.antelope.type.v1.ProducerAuthoritySchedule.prototype.addProducers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.sf.antelope.type.v1.ProducerAuthority, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.ProducerAuthoritySchedule} returns this
 */
proto.sf.antelope.type.v1.ProducerAuthoritySchedule.prototype.clearProducersList = function() {
  return this.setProducersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.ProducerAuthority.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.ProducerAuthority.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.ProducerAuthority} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.ProducerAuthority.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blockSigningAuthority: (f = msg.getBlockSigningAuthority()) && proto.sf.antelope.type.v1.BlockSigningAuthority.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.ProducerAuthority}
 */
proto.sf.antelope.type.v1.ProducerAuthority.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.ProducerAuthority;
  return proto.sf.antelope.type.v1.ProducerAuthority.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.ProducerAuthority} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.ProducerAuthority}
 */
proto.sf.antelope.type.v1.ProducerAuthority.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountName(value);
      break;
    case 2:
      var value = new proto.sf.antelope.type.v1.BlockSigningAuthority;
      reader.readMessage(value,proto.sf.antelope.type.v1.BlockSigningAuthority.deserializeBinaryFromReader);
      msg.setBlockSigningAuthority(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.ProducerAuthority.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.ProducerAuthority.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.ProducerAuthority} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.ProducerAuthority.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlockSigningAuthority();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sf.antelope.type.v1.BlockSigningAuthority.serializeBinaryToWriter
    );
  }
};


/**
 * optional string account_name = 1;
 * @return {string}
 */
proto.sf.antelope.type.v1.ProducerAuthority.prototype.getAccountName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.ProducerAuthority} returns this
 */
proto.sf.antelope.type.v1.ProducerAuthority.prototype.setAccountName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional BlockSigningAuthority block_signing_authority = 2;
 * @return {?proto.sf.antelope.type.v1.BlockSigningAuthority}
 */
proto.sf.antelope.type.v1.ProducerAuthority.prototype.getBlockSigningAuthority = function() {
  return /** @type{?proto.sf.antelope.type.v1.BlockSigningAuthority} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.BlockSigningAuthority, 2));
};


/**
 * @param {?proto.sf.antelope.type.v1.BlockSigningAuthority|undefined} value
 * @return {!proto.sf.antelope.type.v1.ProducerAuthority} returns this
*/
proto.sf.antelope.type.v1.ProducerAuthority.prototype.setBlockSigningAuthority = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.ProducerAuthority} returns this
 */
proto.sf.antelope.type.v1.ProducerAuthority.prototype.clearBlockSigningAuthority = function() {
  return this.setBlockSigningAuthority(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.ProducerAuthority.prototype.hasBlockSigningAuthority = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.ProposerPolicy.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.ProposerPolicy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.ProposerPolicy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.ProposerPolicy.toObject = function(includeInstance, msg) {
  var f, obj = {
    activeTime: (f = msg.getActiveTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    proposerSchedule: (f = msg.getProposerSchedule()) && proto.sf.antelope.type.v1.ProducerAuthoritySchedule.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.ProposerPolicy}
 */
proto.sf.antelope.type.v1.ProposerPolicy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.ProposerPolicy;
  return proto.sf.antelope.type.v1.ProposerPolicy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.ProposerPolicy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.ProposerPolicy}
 */
proto.sf.antelope.type.v1.ProposerPolicy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setActiveTime(value);
      break;
    case 2:
      var value = new proto.sf.antelope.type.v1.ProducerAuthoritySchedule;
      reader.readMessage(value,proto.sf.antelope.type.v1.ProducerAuthoritySchedule.deserializeBinaryFromReader);
      msg.setProposerSchedule(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.ProposerPolicy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.ProposerPolicy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.ProposerPolicy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.ProposerPolicy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActiveTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getProposerSchedule();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sf.antelope.type.v1.ProducerAuthoritySchedule.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp active_time = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.sf.antelope.type.v1.ProposerPolicy.prototype.getActiveTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.sf.antelope.type.v1.ProposerPolicy} returns this
*/
proto.sf.antelope.type.v1.ProposerPolicy.prototype.setActiveTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.ProposerPolicy} returns this
 */
proto.sf.antelope.type.v1.ProposerPolicy.prototype.clearActiveTime = function() {
  return this.setActiveTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.ProposerPolicy.prototype.hasActiveTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ProducerAuthoritySchedule proposer_schedule = 2;
 * @return {?proto.sf.antelope.type.v1.ProducerAuthoritySchedule}
 */
proto.sf.antelope.type.v1.ProposerPolicy.prototype.getProposerSchedule = function() {
  return /** @type{?proto.sf.antelope.type.v1.ProducerAuthoritySchedule} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.ProducerAuthoritySchedule, 2));
};


/**
 * @param {?proto.sf.antelope.type.v1.ProducerAuthoritySchedule|undefined} value
 * @return {!proto.sf.antelope.type.v1.ProposerPolicy} returns this
*/
proto.sf.antelope.type.v1.ProposerPolicy.prototype.setProposerSchedule = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.ProposerPolicy} returns this
 */
proto.sf.antelope.type.v1.ProposerPolicy.prototype.clearProposerSchedule = function() {
  return this.setProposerSchedule(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.ProposerPolicy.prototype.hasProposerSchedule = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.sf.antelope.type.v1.BlockSigningAuthority.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.sf.antelope.type.v1.BlockSigningAuthority.VariantCase = {
  VARIANT_NOT_SET: 0,
  V0: 1
};

/**
 * @return {proto.sf.antelope.type.v1.BlockSigningAuthority.VariantCase}
 */
proto.sf.antelope.type.v1.BlockSigningAuthority.prototype.getVariantCase = function() {
  return /** @type {proto.sf.antelope.type.v1.BlockSigningAuthority.VariantCase} */(jspb.Message.computeOneofCase(this, proto.sf.antelope.type.v1.BlockSigningAuthority.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.BlockSigningAuthority.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.BlockSigningAuthority.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.BlockSigningAuthority} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.BlockSigningAuthority.toObject = function(includeInstance, msg) {
  var f, obj = {
    v0: (f = msg.getV0()) && proto.sf.antelope.type.v1.BlockSigningAuthorityV0.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.BlockSigningAuthority}
 */
proto.sf.antelope.type.v1.BlockSigningAuthority.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.BlockSigningAuthority;
  return proto.sf.antelope.type.v1.BlockSigningAuthority.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.BlockSigningAuthority} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.BlockSigningAuthority}
 */
proto.sf.antelope.type.v1.BlockSigningAuthority.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sf.antelope.type.v1.BlockSigningAuthorityV0;
      reader.readMessage(value,proto.sf.antelope.type.v1.BlockSigningAuthorityV0.deserializeBinaryFromReader);
      msg.setV0(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.BlockSigningAuthority.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.BlockSigningAuthority.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.BlockSigningAuthority} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.BlockSigningAuthority.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getV0();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sf.antelope.type.v1.BlockSigningAuthorityV0.serializeBinaryToWriter
    );
  }
};


/**
 * optional BlockSigningAuthorityV0 v0 = 1;
 * @return {?proto.sf.antelope.type.v1.BlockSigningAuthorityV0}
 */
proto.sf.antelope.type.v1.BlockSigningAuthority.prototype.getV0 = function() {
  return /** @type{?proto.sf.antelope.type.v1.BlockSigningAuthorityV0} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.BlockSigningAuthorityV0, 1));
};


/**
 * @param {?proto.sf.antelope.type.v1.BlockSigningAuthorityV0|undefined} value
 * @return {!proto.sf.antelope.type.v1.BlockSigningAuthority} returns this
*/
proto.sf.antelope.type.v1.BlockSigningAuthority.prototype.setV0 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.sf.antelope.type.v1.BlockSigningAuthority.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.BlockSigningAuthority} returns this
 */
proto.sf.antelope.type.v1.BlockSigningAuthority.prototype.clearV0 = function() {
  return this.setV0(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.BlockSigningAuthority.prototype.hasV0 = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sf.antelope.type.v1.BlockSigningAuthorityV0.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.BlockSigningAuthorityV0.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.BlockSigningAuthorityV0.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.BlockSigningAuthorityV0} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.BlockSigningAuthorityV0.toObject = function(includeInstance, msg) {
  var f, obj = {
    threshold: jspb.Message.getFieldWithDefault(msg, 1, 0),
    keysList: jspb.Message.toObjectList(msg.getKeysList(),
    proto.sf.antelope.type.v1.KeyWeight.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.BlockSigningAuthorityV0}
 */
proto.sf.antelope.type.v1.BlockSigningAuthorityV0.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.BlockSigningAuthorityV0;
  return proto.sf.antelope.type.v1.BlockSigningAuthorityV0.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.BlockSigningAuthorityV0} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.BlockSigningAuthorityV0}
 */
proto.sf.antelope.type.v1.BlockSigningAuthorityV0.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setThreshold(value);
      break;
    case 2:
      var value = new proto.sf.antelope.type.v1.KeyWeight;
      reader.readMessage(value,proto.sf.antelope.type.v1.KeyWeight.deserializeBinaryFromReader);
      msg.addKeys(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.BlockSigningAuthorityV0.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.BlockSigningAuthorityV0.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.BlockSigningAuthorityV0} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.BlockSigningAuthorityV0.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getThreshold();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getKeysList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.sf.antelope.type.v1.KeyWeight.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 threshold = 1;
 * @return {number}
 */
proto.sf.antelope.type.v1.BlockSigningAuthorityV0.prototype.getThreshold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.BlockSigningAuthorityV0} returns this
 */
proto.sf.antelope.type.v1.BlockSigningAuthorityV0.prototype.setThreshold = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated KeyWeight keys = 2;
 * @return {!Array<!proto.sf.antelope.type.v1.KeyWeight>}
 */
proto.sf.antelope.type.v1.BlockSigningAuthorityV0.prototype.getKeysList = function() {
  return /** @type{!Array<!proto.sf.antelope.type.v1.KeyWeight>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sf.antelope.type.v1.KeyWeight, 2));
};


/**
 * @param {!Array<!proto.sf.antelope.type.v1.KeyWeight>} value
 * @return {!proto.sf.antelope.type.v1.BlockSigningAuthorityV0} returns this
*/
proto.sf.antelope.type.v1.BlockSigningAuthorityV0.prototype.setKeysList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.sf.antelope.type.v1.KeyWeight=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.KeyWeight}
 */
proto.sf.antelope.type.v1.BlockSigningAuthorityV0.prototype.addKeys = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.sf.antelope.type.v1.KeyWeight, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.BlockSigningAuthorityV0} returns this
 */
proto.sf.antelope.type.v1.BlockSigningAuthorityV0.prototype.clearKeysList = function() {
  return this.setKeysList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sf.antelope.type.v1.BlockRootMerkle.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.BlockRootMerkle.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.BlockRootMerkle.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.BlockRootMerkle} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.BlockRootMerkle.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    activeNodesList: msg.getActiveNodesList_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.BlockRootMerkle}
 */
proto.sf.antelope.type.v1.BlockRootMerkle.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.BlockRootMerkle;
  return proto.sf.antelope.type.v1.BlockRootMerkle.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.BlockRootMerkle} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.BlockRootMerkle}
 */
proto.sf.antelope.type.v1.BlockRootMerkle.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNodeCount(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addActiveNodes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.BlockRootMerkle.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.BlockRootMerkle.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.BlockRootMerkle} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.BlockRootMerkle.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodeCount();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getActiveNodesList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      2,
      f
    );
  }
};


/**
 * optional uint32 node_count = 1;
 * @return {number}
 */
proto.sf.antelope.type.v1.BlockRootMerkle.prototype.getNodeCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.BlockRootMerkle} returns this
 */
proto.sf.antelope.type.v1.BlockRootMerkle.prototype.setNodeCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated bytes active_nodes = 2;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.sf.antelope.type.v1.BlockRootMerkle.prototype.getActiveNodesList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * repeated bytes active_nodes = 2;
 * This is a type-conversion wrapper around `getActiveNodesList()`
 * @return {!Array<string>}
 */
proto.sf.antelope.type.v1.BlockRootMerkle.prototype.getActiveNodesList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getActiveNodesList()));
};


/**
 * repeated bytes active_nodes = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getActiveNodesList()`
 * @return {!Array<!Uint8Array>}
 */
proto.sf.antelope.type.v1.BlockRootMerkle.prototype.getActiveNodesList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getActiveNodesList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.sf.antelope.type.v1.BlockRootMerkle} returns this
 */
proto.sf.antelope.type.v1.BlockRootMerkle.prototype.setActiveNodesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.BlockRootMerkle} returns this
 */
proto.sf.antelope.type.v1.BlockRootMerkle.prototype.addActiveNodes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.BlockRootMerkle} returns this
 */
proto.sf.antelope.type.v1.BlockRootMerkle.prototype.clearActiveNodesList = function() {
  return this.setActiveNodesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.ProducerToLastProduced.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.ProducerToLastProduced.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.ProducerToLastProduced} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.ProducerToLastProduced.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    lastBlockNumProduced: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.ProducerToLastProduced}
 */
proto.sf.antelope.type.v1.ProducerToLastProduced.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.ProducerToLastProduced;
  return proto.sf.antelope.type.v1.ProducerToLastProduced.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.ProducerToLastProduced} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.ProducerToLastProduced}
 */
proto.sf.antelope.type.v1.ProducerToLastProduced.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLastBlockNumProduced(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.ProducerToLastProduced.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.ProducerToLastProduced.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.ProducerToLastProduced} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.ProducerToLastProduced.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLastBlockNumProduced();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.sf.antelope.type.v1.ProducerToLastProduced.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.ProducerToLastProduced} returns this
 */
proto.sf.antelope.type.v1.ProducerToLastProduced.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 last_block_num_produced = 2;
 * @return {number}
 */
proto.sf.antelope.type.v1.ProducerToLastProduced.prototype.getLastBlockNumProduced = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.ProducerToLastProduced} returns this
 */
proto.sf.antelope.type.v1.ProducerToLastProduced.prototype.setLastBlockNumProduced = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.ProducerToLastImpliedIRB.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.ProducerToLastImpliedIRB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.ProducerToLastImpliedIRB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.ProducerToLastImpliedIRB.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    lastBlockNumProduced: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.ProducerToLastImpliedIRB}
 */
proto.sf.antelope.type.v1.ProducerToLastImpliedIRB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.ProducerToLastImpliedIRB;
  return proto.sf.antelope.type.v1.ProducerToLastImpliedIRB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.ProducerToLastImpliedIRB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.ProducerToLastImpliedIRB}
 */
proto.sf.antelope.type.v1.ProducerToLastImpliedIRB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLastBlockNumProduced(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.ProducerToLastImpliedIRB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.ProducerToLastImpliedIRB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.ProducerToLastImpliedIRB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.ProducerToLastImpliedIRB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLastBlockNumProduced();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.sf.antelope.type.v1.ProducerToLastImpliedIRB.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.ProducerToLastImpliedIRB} returns this
 */
proto.sf.antelope.type.v1.ProducerToLastImpliedIRB.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 last_block_num_produced = 2;
 * @return {number}
 */
proto.sf.antelope.type.v1.ProducerToLastImpliedIRB.prototype.getLastBlockNumProduced = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.ProducerToLastImpliedIRB} returns this
 */
proto.sf.antelope.type.v1.ProducerToLastImpliedIRB.prototype.setLastBlockNumProduced = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.TransactionReceipt.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.TransactionReceipt.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.TransactionReceipt} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.TransactionReceipt.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 4, ""),
    index: jspb.Message.getFieldWithDefault(msg, 6, "0"),
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    cpuUsageMicroSeconds: jspb.Message.getFieldWithDefault(msg, 2, 0),
    netUsageWords: jspb.Message.getFieldWithDefault(msg, 3, 0),
    packedTransaction: (f = msg.getPackedTransaction()) && proto.sf.antelope.type.v1.PackedTransaction.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.TransactionReceipt}
 */
proto.sf.antelope.type.v1.TransactionReceipt.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.TransactionReceipt;
  return proto.sf.antelope.type.v1.TransactionReceipt.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.TransactionReceipt} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.TransactionReceipt}
 */
proto.sf.antelope.type.v1.TransactionReceipt.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setIndex(value);
      break;
    case 1:
      var value = /** @type {!proto.sf.antelope.type.v1.TransactionStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCpuUsageMicroSeconds(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNetUsageWords(value);
      break;
    case 5:
      var value = new proto.sf.antelope.type.v1.PackedTransaction;
      reader.readMessage(value,proto.sf.antelope.type.v1.PackedTransaction.deserializeBinaryFromReader);
      msg.setPackedTransaction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.TransactionReceipt.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.TransactionReceipt.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.TransactionReceipt} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.TransactionReceipt.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIndex();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      6,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getCpuUsageMicroSeconds();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getNetUsageWords();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getPackedTransaction();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.sf.antelope.type.v1.PackedTransaction.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 4;
 * @return {string}
 */
proto.sf.antelope.type.v1.TransactionReceipt.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.TransactionReceipt} returns this
 */
proto.sf.antelope.type.v1.TransactionReceipt.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint64 index = 6;
 * @return {string}
 */
proto.sf.antelope.type.v1.TransactionReceipt.prototype.getIndex = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, "0"));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.TransactionReceipt} returns this
 */
proto.sf.antelope.type.v1.TransactionReceipt.prototype.setIndex = function(value) {
  return jspb.Message.setProto3StringIntField(this, 6, value);
};


/**
 * optional TransactionStatus status = 1;
 * @return {!proto.sf.antelope.type.v1.TransactionStatus}
 */
proto.sf.antelope.type.v1.TransactionReceipt.prototype.getStatus = function() {
  return /** @type {!proto.sf.antelope.type.v1.TransactionStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.sf.antelope.type.v1.TransactionStatus} value
 * @return {!proto.sf.antelope.type.v1.TransactionReceipt} returns this
 */
proto.sf.antelope.type.v1.TransactionReceipt.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional uint32 cpu_usage_micro_seconds = 2;
 * @return {number}
 */
proto.sf.antelope.type.v1.TransactionReceipt.prototype.getCpuUsageMicroSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.TransactionReceipt} returns this
 */
proto.sf.antelope.type.v1.TransactionReceipt.prototype.setCpuUsageMicroSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 net_usage_words = 3;
 * @return {number}
 */
proto.sf.antelope.type.v1.TransactionReceipt.prototype.getNetUsageWords = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.TransactionReceipt} returns this
 */
proto.sf.antelope.type.v1.TransactionReceipt.prototype.setNetUsageWords = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional PackedTransaction packed_transaction = 5;
 * @return {?proto.sf.antelope.type.v1.PackedTransaction}
 */
proto.sf.antelope.type.v1.TransactionReceipt.prototype.getPackedTransaction = function() {
  return /** @type{?proto.sf.antelope.type.v1.PackedTransaction} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.PackedTransaction, 5));
};


/**
 * @param {?proto.sf.antelope.type.v1.PackedTransaction|undefined} value
 * @return {!proto.sf.antelope.type.v1.TransactionReceipt} returns this
*/
proto.sf.antelope.type.v1.TransactionReceipt.prototype.setPackedTransaction = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.TransactionReceipt} returns this
 */
proto.sf.antelope.type.v1.TransactionReceipt.prototype.clearPackedTransaction = function() {
  return this.setPackedTransaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.TransactionReceipt.prototype.hasPackedTransaction = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sf.antelope.type.v1.PackedTransaction.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.PackedTransaction.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.PackedTransaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.PackedTransaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.PackedTransaction.toObject = function(includeInstance, msg) {
  var f, obj = {
    signaturesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    compression: jspb.Message.getFieldWithDefault(msg, 2, 0),
    packedContextFreeData: msg.getPackedContextFreeData_asB64(),
    packedTransaction: msg.getPackedTransaction_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.PackedTransaction}
 */
proto.sf.antelope.type.v1.PackedTransaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.PackedTransaction;
  return proto.sf.antelope.type.v1.PackedTransaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.PackedTransaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.PackedTransaction}
 */
proto.sf.antelope.type.v1.PackedTransaction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addSignatures(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCompression(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPackedContextFreeData(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPackedTransaction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.PackedTransaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.PackedTransaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.PackedTransaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.PackedTransaction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignaturesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getCompression();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getPackedContextFreeData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getPackedTransaction_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
};


/**
 * repeated string signatures = 1;
 * @return {!Array<string>}
 */
proto.sf.antelope.type.v1.PackedTransaction.prototype.getSignaturesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sf.antelope.type.v1.PackedTransaction} returns this
 */
proto.sf.antelope.type.v1.PackedTransaction.prototype.setSignaturesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.PackedTransaction} returns this
 */
proto.sf.antelope.type.v1.PackedTransaction.prototype.addSignatures = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.PackedTransaction} returns this
 */
proto.sf.antelope.type.v1.PackedTransaction.prototype.clearSignaturesList = function() {
  return this.setSignaturesList([]);
};


/**
 * optional uint32 compression = 2;
 * @return {number}
 */
proto.sf.antelope.type.v1.PackedTransaction.prototype.getCompression = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.PackedTransaction} returns this
 */
proto.sf.antelope.type.v1.PackedTransaction.prototype.setCompression = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bytes packed_context_free_data = 3;
 * @return {!(string|Uint8Array)}
 */
proto.sf.antelope.type.v1.PackedTransaction.prototype.getPackedContextFreeData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes packed_context_free_data = 3;
 * This is a type-conversion wrapper around `getPackedContextFreeData()`
 * @return {string}
 */
proto.sf.antelope.type.v1.PackedTransaction.prototype.getPackedContextFreeData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPackedContextFreeData()));
};


/**
 * optional bytes packed_context_free_data = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPackedContextFreeData()`
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.PackedTransaction.prototype.getPackedContextFreeData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPackedContextFreeData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sf.antelope.type.v1.PackedTransaction} returns this
 */
proto.sf.antelope.type.v1.PackedTransaction.prototype.setPackedContextFreeData = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional bytes packed_transaction = 4;
 * @return {!(string|Uint8Array)}
 */
proto.sf.antelope.type.v1.PackedTransaction.prototype.getPackedTransaction = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes packed_transaction = 4;
 * This is a type-conversion wrapper around `getPackedTransaction()`
 * @return {string}
 */
proto.sf.antelope.type.v1.PackedTransaction.prototype.getPackedTransaction_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPackedTransaction()));
};


/**
 * optional bytes packed_transaction = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPackedTransaction()`
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.PackedTransaction.prototype.getPackedTransaction_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPackedTransaction()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sf.antelope.type.v1.PackedTransaction} returns this
 */
proto.sf.antelope.type.v1.PackedTransaction.prototype.setPackedTransaction = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sf.antelope.type.v1.BlockHeader.repeatedFields_ = [11,12];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.BlockHeader.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.BlockHeader.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.BlockHeader} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.BlockHeader.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    producer: jspb.Message.getFieldWithDefault(msg, 4, ""),
    confirmed: jspb.Message.getFieldWithDefault(msg, 5, 0),
    previous: jspb.Message.getFieldWithDefault(msg, 6, ""),
    transactionMroot: msg.getTransactionMroot_asB64(),
    actionMroot: msg.getActionMroot_asB64(),
    scheduleVersion: jspb.Message.getFieldWithDefault(msg, 9, 0),
    headerExtensionsList: jspb.Message.toObjectList(msg.getHeaderExtensionsList(),
    proto.sf.antelope.type.v1.Extension.toObject, includeInstance),
    decodedHeaderExtensionsList: jspb.Message.toObjectList(msg.getDecodedHeaderExtensionsList(),
    proto.sf.antelope.type.v1.BlockHeaderExtension.toObject, includeInstance),
    newProducersV1: (f = msg.getNewProducersV1()) && proto.sf.antelope.type.v1.ProducerSchedule.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.BlockHeader}
 */
proto.sf.antelope.type.v1.BlockHeader.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.BlockHeader;
  return proto.sf.antelope.type.v1.BlockHeader.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.BlockHeader} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.BlockHeader}
 */
proto.sf.antelope.type.v1.BlockHeader.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setProducer(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setConfirmed(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrevious(value);
      break;
    case 7:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTransactionMroot(value);
      break;
    case 8:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setActionMroot(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setScheduleVersion(value);
      break;
    case 11:
      var value = new proto.sf.antelope.type.v1.Extension;
      reader.readMessage(value,proto.sf.antelope.type.v1.Extension.deserializeBinaryFromReader);
      msg.addHeaderExtensions(value);
      break;
    case 12:
      var value = new proto.sf.antelope.type.v1.BlockHeaderExtension;
      reader.readMessage(value,proto.sf.antelope.type.v1.BlockHeaderExtension.deserializeBinaryFromReader);
      msg.addDecodedHeaderExtensions(value);
      break;
    case 10:
      var value = new proto.sf.antelope.type.v1.ProducerSchedule;
      reader.readMessage(value,proto.sf.antelope.type.v1.ProducerSchedule.deserializeBinaryFromReader);
      msg.setNewProducersV1(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.BlockHeader.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.BlockHeader.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.BlockHeader} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.BlockHeader.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getProducer();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getConfirmed();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getPrevious();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getTransactionMroot_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      7,
      f
    );
  }
  f = message.getActionMroot_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      8,
      f
    );
  }
  f = message.getScheduleVersion();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = message.getHeaderExtensionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.sf.antelope.type.v1.Extension.serializeBinaryToWriter
    );
  }
  f = message.getDecodedHeaderExtensionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.sf.antelope.type.v1.BlockHeaderExtension.serializeBinaryToWriter
    );
  }
  f = message.getNewProducersV1();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.sf.antelope.type.v1.ProducerSchedule.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp timestamp = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.sf.antelope.type.v1.BlockHeader.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.sf.antelope.type.v1.BlockHeader} returns this
*/
proto.sf.antelope.type.v1.BlockHeader.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.BlockHeader} returns this
 */
proto.sf.antelope.type.v1.BlockHeader.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.BlockHeader.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string producer = 4;
 * @return {string}
 */
proto.sf.antelope.type.v1.BlockHeader.prototype.getProducer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.BlockHeader} returns this
 */
proto.sf.antelope.type.v1.BlockHeader.prototype.setProducer = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint32 confirmed = 5;
 * @return {number}
 */
proto.sf.antelope.type.v1.BlockHeader.prototype.getConfirmed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.BlockHeader} returns this
 */
proto.sf.antelope.type.v1.BlockHeader.prototype.setConfirmed = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string previous = 6;
 * @return {string}
 */
proto.sf.antelope.type.v1.BlockHeader.prototype.getPrevious = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.BlockHeader} returns this
 */
proto.sf.antelope.type.v1.BlockHeader.prototype.setPrevious = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional bytes transaction_mroot = 7;
 * @return {!(string|Uint8Array)}
 */
proto.sf.antelope.type.v1.BlockHeader.prototype.getTransactionMroot = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes transaction_mroot = 7;
 * This is a type-conversion wrapper around `getTransactionMroot()`
 * @return {string}
 */
proto.sf.antelope.type.v1.BlockHeader.prototype.getTransactionMroot_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTransactionMroot()));
};


/**
 * optional bytes transaction_mroot = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTransactionMroot()`
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.BlockHeader.prototype.getTransactionMroot_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTransactionMroot()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sf.antelope.type.v1.BlockHeader} returns this
 */
proto.sf.antelope.type.v1.BlockHeader.prototype.setTransactionMroot = function(value) {
  return jspb.Message.setProto3BytesField(this, 7, value);
};


/**
 * optional bytes action_mroot = 8;
 * @return {!(string|Uint8Array)}
 */
proto.sf.antelope.type.v1.BlockHeader.prototype.getActionMroot = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * optional bytes action_mroot = 8;
 * This is a type-conversion wrapper around `getActionMroot()`
 * @return {string}
 */
proto.sf.antelope.type.v1.BlockHeader.prototype.getActionMroot_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getActionMroot()));
};


/**
 * optional bytes action_mroot = 8;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getActionMroot()`
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.BlockHeader.prototype.getActionMroot_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getActionMroot()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sf.antelope.type.v1.BlockHeader} returns this
 */
proto.sf.antelope.type.v1.BlockHeader.prototype.setActionMroot = function(value) {
  return jspb.Message.setProto3BytesField(this, 8, value);
};


/**
 * optional uint32 schedule_version = 9;
 * @return {number}
 */
proto.sf.antelope.type.v1.BlockHeader.prototype.getScheduleVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.BlockHeader} returns this
 */
proto.sf.antelope.type.v1.BlockHeader.prototype.setScheduleVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * repeated Extension header_extensions = 11;
 * @return {!Array<!proto.sf.antelope.type.v1.Extension>}
 */
proto.sf.antelope.type.v1.BlockHeader.prototype.getHeaderExtensionsList = function() {
  return /** @type{!Array<!proto.sf.antelope.type.v1.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sf.antelope.type.v1.Extension, 11));
};


/**
 * @param {!Array<!proto.sf.antelope.type.v1.Extension>} value
 * @return {!proto.sf.antelope.type.v1.BlockHeader} returns this
*/
proto.sf.antelope.type.v1.BlockHeader.prototype.setHeaderExtensionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.sf.antelope.type.v1.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.Extension}
 */
proto.sf.antelope.type.v1.BlockHeader.prototype.addHeaderExtensions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.sf.antelope.type.v1.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.BlockHeader} returns this
 */
proto.sf.antelope.type.v1.BlockHeader.prototype.clearHeaderExtensionsList = function() {
  return this.setHeaderExtensionsList([]);
};


/**
 * repeated BlockHeaderExtension decoded_header_extensions = 12;
 * @return {!Array<!proto.sf.antelope.type.v1.BlockHeaderExtension>}
 */
proto.sf.antelope.type.v1.BlockHeader.prototype.getDecodedHeaderExtensionsList = function() {
  return /** @type{!Array<!proto.sf.antelope.type.v1.BlockHeaderExtension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sf.antelope.type.v1.BlockHeaderExtension, 12));
};


/**
 * @param {!Array<!proto.sf.antelope.type.v1.BlockHeaderExtension>} value
 * @return {!proto.sf.antelope.type.v1.BlockHeader} returns this
*/
proto.sf.antelope.type.v1.BlockHeader.prototype.setDecodedHeaderExtensionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.sf.antelope.type.v1.BlockHeaderExtension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.BlockHeaderExtension}
 */
proto.sf.antelope.type.v1.BlockHeader.prototype.addDecodedHeaderExtensions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.sf.antelope.type.v1.BlockHeaderExtension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.BlockHeader} returns this
 */
proto.sf.antelope.type.v1.BlockHeader.prototype.clearDecodedHeaderExtensionsList = function() {
  return this.setDecodedHeaderExtensionsList([]);
};


/**
 * optional ProducerSchedule new_producers_v1 = 10;
 * @return {?proto.sf.antelope.type.v1.ProducerSchedule}
 */
proto.sf.antelope.type.v1.BlockHeader.prototype.getNewProducersV1 = function() {
  return /** @type{?proto.sf.antelope.type.v1.ProducerSchedule} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.ProducerSchedule, 10));
};


/**
 * @param {?proto.sf.antelope.type.v1.ProducerSchedule|undefined} value
 * @return {!proto.sf.antelope.type.v1.BlockHeader} returns this
*/
proto.sf.antelope.type.v1.BlockHeader.prototype.setNewProducersV1 = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.BlockHeader} returns this
 */
proto.sf.antelope.type.v1.BlockHeader.prototype.clearNewProducersV1 = function() {
  return this.setNewProducersV1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.BlockHeader.prototype.hasNewProducersV1 = function() {
  return jspb.Message.getField(this, 10) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.sf.antelope.type.v1.BlockHeaderExtension.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.sf.antelope.type.v1.BlockHeaderExtension.ExtensionCase = {
  EXTENSION_NOT_SET: 0,
  PROTOCOL_FEATURE_ACTIVATION_EXTENSION: 1,
  PRODUCER_SCHEDULE_CHANGE_EXTENSION: 2
};

/**
 * @return {proto.sf.antelope.type.v1.BlockHeaderExtension.ExtensionCase}
 */
proto.sf.antelope.type.v1.BlockHeaderExtension.prototype.getExtensionCase = function() {
  return /** @type {proto.sf.antelope.type.v1.BlockHeaderExtension.ExtensionCase} */(jspb.Message.computeOneofCase(this, proto.sf.antelope.type.v1.BlockHeaderExtension.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.BlockHeaderExtension.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.BlockHeaderExtension.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.BlockHeaderExtension} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.BlockHeaderExtension.toObject = function(includeInstance, msg) {
  var f, obj = {
    protocolFeatureActivationExtension: (f = msg.getProtocolFeatureActivationExtension()) && proto.sf.antelope.type.v1.ProtocolFeatureActivationExtension.toObject(includeInstance, f),
    producerScheduleChangeExtension: (f = msg.getProducerScheduleChangeExtension()) && proto.sf.antelope.type.v1.ProducerScheduleChangeExtension.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.BlockHeaderExtension}
 */
proto.sf.antelope.type.v1.BlockHeaderExtension.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.BlockHeaderExtension;
  return proto.sf.antelope.type.v1.BlockHeaderExtension.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.BlockHeaderExtension} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.BlockHeaderExtension}
 */
proto.sf.antelope.type.v1.BlockHeaderExtension.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sf.antelope.type.v1.ProtocolFeatureActivationExtension;
      reader.readMessage(value,proto.sf.antelope.type.v1.ProtocolFeatureActivationExtension.deserializeBinaryFromReader);
      msg.setProtocolFeatureActivationExtension(value);
      break;
    case 2:
      var value = new proto.sf.antelope.type.v1.ProducerScheduleChangeExtension;
      reader.readMessage(value,proto.sf.antelope.type.v1.ProducerScheduleChangeExtension.deserializeBinaryFromReader);
      msg.setProducerScheduleChangeExtension(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.BlockHeaderExtension.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.BlockHeaderExtension.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.BlockHeaderExtension} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.BlockHeaderExtension.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProtocolFeatureActivationExtension();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sf.antelope.type.v1.ProtocolFeatureActivationExtension.serializeBinaryToWriter
    );
  }
  f = message.getProducerScheduleChangeExtension();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sf.antelope.type.v1.ProducerScheduleChangeExtension.serializeBinaryToWriter
    );
  }
};


/**
 * optional ProtocolFeatureActivationExtension protocol_feature_activation_extension = 1;
 * @return {?proto.sf.antelope.type.v1.ProtocolFeatureActivationExtension}
 */
proto.sf.antelope.type.v1.BlockHeaderExtension.prototype.getProtocolFeatureActivationExtension = function() {
  return /** @type{?proto.sf.antelope.type.v1.ProtocolFeatureActivationExtension} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.ProtocolFeatureActivationExtension, 1));
};


/**
 * @param {?proto.sf.antelope.type.v1.ProtocolFeatureActivationExtension|undefined} value
 * @return {!proto.sf.antelope.type.v1.BlockHeaderExtension} returns this
*/
proto.sf.antelope.type.v1.BlockHeaderExtension.prototype.setProtocolFeatureActivationExtension = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.sf.antelope.type.v1.BlockHeaderExtension.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.BlockHeaderExtension} returns this
 */
proto.sf.antelope.type.v1.BlockHeaderExtension.prototype.clearProtocolFeatureActivationExtension = function() {
  return this.setProtocolFeatureActivationExtension(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.BlockHeaderExtension.prototype.hasProtocolFeatureActivationExtension = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ProducerScheduleChangeExtension producer_schedule_change_extension = 2;
 * @return {?proto.sf.antelope.type.v1.ProducerScheduleChangeExtension}
 */
proto.sf.antelope.type.v1.BlockHeaderExtension.prototype.getProducerScheduleChangeExtension = function() {
  return /** @type{?proto.sf.antelope.type.v1.ProducerScheduleChangeExtension} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.ProducerScheduleChangeExtension, 2));
};


/**
 * @param {?proto.sf.antelope.type.v1.ProducerScheduleChangeExtension|undefined} value
 * @return {!proto.sf.antelope.type.v1.BlockHeaderExtension} returns this
*/
proto.sf.antelope.type.v1.BlockHeaderExtension.prototype.setProducerScheduleChangeExtension = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.sf.antelope.type.v1.BlockHeaderExtension.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.BlockHeaderExtension} returns this
 */
proto.sf.antelope.type.v1.BlockHeaderExtension.prototype.clearProducerScheduleChangeExtension = function() {
  return this.setProducerScheduleChangeExtension(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.BlockHeaderExtension.prototype.hasProducerScheduleChangeExtension = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sf.antelope.type.v1.ProtocolFeatureActivationExtension.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.ProtocolFeatureActivationExtension.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.ProtocolFeatureActivationExtension.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.ProtocolFeatureActivationExtension} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.ProtocolFeatureActivationExtension.toObject = function(includeInstance, msg) {
  var f, obj = {
    protocolFeaturesList: msg.getProtocolFeaturesList_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.ProtocolFeatureActivationExtension}
 */
proto.sf.antelope.type.v1.ProtocolFeatureActivationExtension.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.ProtocolFeatureActivationExtension;
  return proto.sf.antelope.type.v1.ProtocolFeatureActivationExtension.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.ProtocolFeatureActivationExtension} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.ProtocolFeatureActivationExtension}
 */
proto.sf.antelope.type.v1.ProtocolFeatureActivationExtension.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addProtocolFeatures(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.ProtocolFeatureActivationExtension.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.ProtocolFeatureActivationExtension.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.ProtocolFeatureActivationExtension} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.ProtocolFeatureActivationExtension.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProtocolFeaturesList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      1,
      f
    );
  }
};


/**
 * repeated bytes protocol_features = 1;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.sf.antelope.type.v1.ProtocolFeatureActivationExtension.prototype.getProtocolFeaturesList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * repeated bytes protocol_features = 1;
 * This is a type-conversion wrapper around `getProtocolFeaturesList()`
 * @return {!Array<string>}
 */
proto.sf.antelope.type.v1.ProtocolFeatureActivationExtension.prototype.getProtocolFeaturesList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getProtocolFeaturesList()));
};


/**
 * repeated bytes protocol_features = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getProtocolFeaturesList()`
 * @return {!Array<!Uint8Array>}
 */
proto.sf.antelope.type.v1.ProtocolFeatureActivationExtension.prototype.getProtocolFeaturesList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getProtocolFeaturesList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.sf.antelope.type.v1.ProtocolFeatureActivationExtension} returns this
 */
proto.sf.antelope.type.v1.ProtocolFeatureActivationExtension.prototype.setProtocolFeaturesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.ProtocolFeatureActivationExtension} returns this
 */
proto.sf.antelope.type.v1.ProtocolFeatureActivationExtension.prototype.addProtocolFeatures = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.ProtocolFeatureActivationExtension} returns this
 */
proto.sf.antelope.type.v1.ProtocolFeatureActivationExtension.prototype.clearProtocolFeaturesList = function() {
  return this.setProtocolFeaturesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.ProducerScheduleChangeExtension.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.ProducerScheduleChangeExtension.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.ProducerScheduleChangeExtension} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.ProducerScheduleChangeExtension.toObject = function(includeInstance, msg) {
  var f, obj = {
    producerSchedule: (f = msg.getProducerSchedule()) && proto.sf.antelope.type.v1.ProducerAuthoritySchedule.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.ProducerScheduleChangeExtension}
 */
proto.sf.antelope.type.v1.ProducerScheduleChangeExtension.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.ProducerScheduleChangeExtension;
  return proto.sf.antelope.type.v1.ProducerScheduleChangeExtension.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.ProducerScheduleChangeExtension} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.ProducerScheduleChangeExtension}
 */
proto.sf.antelope.type.v1.ProducerScheduleChangeExtension.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sf.antelope.type.v1.ProducerAuthoritySchedule;
      reader.readMessage(value,proto.sf.antelope.type.v1.ProducerAuthoritySchedule.deserializeBinaryFromReader);
      msg.setProducerSchedule(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.ProducerScheduleChangeExtension.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.ProducerScheduleChangeExtension.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.ProducerScheduleChangeExtension} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.ProducerScheduleChangeExtension.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProducerSchedule();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sf.antelope.type.v1.ProducerAuthoritySchedule.serializeBinaryToWriter
    );
  }
};


/**
 * optional ProducerAuthoritySchedule producer_schedule = 1;
 * @return {?proto.sf.antelope.type.v1.ProducerAuthoritySchedule}
 */
proto.sf.antelope.type.v1.ProducerScheduleChangeExtension.prototype.getProducerSchedule = function() {
  return /** @type{?proto.sf.antelope.type.v1.ProducerAuthoritySchedule} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.ProducerAuthoritySchedule, 1));
};


/**
 * @param {?proto.sf.antelope.type.v1.ProducerAuthoritySchedule|undefined} value
 * @return {!proto.sf.antelope.type.v1.ProducerScheduleChangeExtension} returns this
*/
proto.sf.antelope.type.v1.ProducerScheduleChangeExtension.prototype.setProducerSchedule = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.ProducerScheduleChangeExtension} returns this
 */
proto.sf.antelope.type.v1.ProducerScheduleChangeExtension.prototype.clearProducerSchedule = function() {
  return this.setProducerSchedule(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.ProducerScheduleChangeExtension.prototype.hasProducerSchedule = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.sf.antelope.type.v1.TransactionEvent.oneofGroups_ = [[5,6,7,8,9]];

/**
 * @enum {number}
 */
proto.sf.antelope.type.v1.TransactionEvent.EventCase = {
  EVENT_NOT_SET: 0,
  INTERNAL_ADDITION: 5,
  ADDITION: 6,
  EXECUTION: 7,
  DTRX_SCHEDULING: 8,
  DTRX_CANCELLATION: 9
};

/**
 * @return {proto.sf.antelope.type.v1.TransactionEvent.EventCase}
 */
proto.sf.antelope.type.v1.TransactionEvent.prototype.getEventCase = function() {
  return /** @type {proto.sf.antelope.type.v1.TransactionEvent.EventCase} */(jspb.Message.computeOneofCase(this, proto.sf.antelope.type.v1.TransactionEvent.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.TransactionEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.TransactionEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.TransactionEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.TransactionEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blockId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    blockNum: jspb.Message.getFieldWithDefault(msg, 3, 0),
    irreversible: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    internalAddition: (f = msg.getInternalAddition()) && proto.sf.antelope.type.v1.TransactionEvent.AddedInternally.toObject(includeInstance, f),
    addition: (f = msg.getAddition()) && proto.sf.antelope.type.v1.TransactionEvent.Added.toObject(includeInstance, f),
    execution: (f = msg.getExecution()) && proto.sf.antelope.type.v1.TransactionEvent.Executed.toObject(includeInstance, f),
    dtrxScheduling: (f = msg.getDtrxScheduling()) && proto.sf.antelope.type.v1.TransactionEvent.DtrxScheduled.toObject(includeInstance, f),
    dtrxCancellation: (f = msg.getDtrxCancellation()) && proto.sf.antelope.type.v1.TransactionEvent.DtrxCanceled.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.TransactionEvent}
 */
proto.sf.antelope.type.v1.TransactionEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.TransactionEvent;
  return proto.sf.antelope.type.v1.TransactionEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.TransactionEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.TransactionEvent}
 */
proto.sf.antelope.type.v1.TransactionEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlockId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBlockNum(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIrreversible(value);
      break;
    case 5:
      var value = new proto.sf.antelope.type.v1.TransactionEvent.AddedInternally;
      reader.readMessage(value,proto.sf.antelope.type.v1.TransactionEvent.AddedInternally.deserializeBinaryFromReader);
      msg.setInternalAddition(value);
      break;
    case 6:
      var value = new proto.sf.antelope.type.v1.TransactionEvent.Added;
      reader.readMessage(value,proto.sf.antelope.type.v1.TransactionEvent.Added.deserializeBinaryFromReader);
      msg.setAddition(value);
      break;
    case 7:
      var value = new proto.sf.antelope.type.v1.TransactionEvent.Executed;
      reader.readMessage(value,proto.sf.antelope.type.v1.TransactionEvent.Executed.deserializeBinaryFromReader);
      msg.setExecution(value);
      break;
    case 8:
      var value = new proto.sf.antelope.type.v1.TransactionEvent.DtrxScheduled;
      reader.readMessage(value,proto.sf.antelope.type.v1.TransactionEvent.DtrxScheduled.deserializeBinaryFromReader);
      msg.setDtrxScheduling(value);
      break;
    case 9:
      var value = new proto.sf.antelope.type.v1.TransactionEvent.DtrxCanceled;
      reader.readMessage(value,proto.sf.antelope.type.v1.TransactionEvent.DtrxCanceled.deserializeBinaryFromReader);
      msg.setDtrxCancellation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.TransactionEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.TransactionEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.TransactionEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.TransactionEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlockId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBlockNum();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getIrreversible();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getInternalAddition();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.sf.antelope.type.v1.TransactionEvent.AddedInternally.serializeBinaryToWriter
    );
  }
  f = message.getAddition();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.sf.antelope.type.v1.TransactionEvent.Added.serializeBinaryToWriter
    );
  }
  f = message.getExecution();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.sf.antelope.type.v1.TransactionEvent.Executed.serializeBinaryToWriter
    );
  }
  f = message.getDtrxScheduling();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.sf.antelope.type.v1.TransactionEvent.DtrxScheduled.serializeBinaryToWriter
    );
  }
  f = message.getDtrxCancellation();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.sf.antelope.type.v1.TransactionEvent.DtrxCanceled.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.TransactionEvent.AddedInternally.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.TransactionEvent.AddedInternally.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.TransactionEvent.AddedInternally} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.TransactionEvent.AddedInternally.toObject = function(includeInstance, msg) {
  var f, obj = {
    transaction: (f = msg.getTransaction()) && proto.sf.antelope.type.v1.SignedTransaction.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.TransactionEvent.AddedInternally}
 */
proto.sf.antelope.type.v1.TransactionEvent.AddedInternally.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.TransactionEvent.AddedInternally;
  return proto.sf.antelope.type.v1.TransactionEvent.AddedInternally.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.TransactionEvent.AddedInternally} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.TransactionEvent.AddedInternally}
 */
proto.sf.antelope.type.v1.TransactionEvent.AddedInternally.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sf.antelope.type.v1.SignedTransaction;
      reader.readMessage(value,proto.sf.antelope.type.v1.SignedTransaction.deserializeBinaryFromReader);
      msg.setTransaction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.TransactionEvent.AddedInternally.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.TransactionEvent.AddedInternally.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.TransactionEvent.AddedInternally} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.TransactionEvent.AddedInternally.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransaction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sf.antelope.type.v1.SignedTransaction.serializeBinaryToWriter
    );
  }
};


/**
 * optional SignedTransaction transaction = 1;
 * @return {?proto.sf.antelope.type.v1.SignedTransaction}
 */
proto.sf.antelope.type.v1.TransactionEvent.AddedInternally.prototype.getTransaction = function() {
  return /** @type{?proto.sf.antelope.type.v1.SignedTransaction} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.SignedTransaction, 1));
};


/**
 * @param {?proto.sf.antelope.type.v1.SignedTransaction|undefined} value
 * @return {!proto.sf.antelope.type.v1.TransactionEvent.AddedInternally} returns this
*/
proto.sf.antelope.type.v1.TransactionEvent.AddedInternally.prototype.setTransaction = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.TransactionEvent.AddedInternally} returns this
 */
proto.sf.antelope.type.v1.TransactionEvent.AddedInternally.prototype.clearTransaction = function() {
  return this.setTransaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.TransactionEvent.AddedInternally.prototype.hasTransaction = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.TransactionEvent.Added.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.TransactionEvent.Added.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.TransactionEvent.Added} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.TransactionEvent.Added.toObject = function(includeInstance, msg) {
  var f, obj = {
    receipt: (f = msg.getReceipt()) && proto.sf.antelope.type.v1.TransactionReceipt.toObject(includeInstance, f),
    transaction: (f = msg.getTransaction()) && proto.sf.antelope.type.v1.SignedTransaction.toObject(includeInstance, f),
    publicKeys: (f = msg.getPublicKeys()) && proto.sf.antelope.type.v1.PublicKeys.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.TransactionEvent.Added}
 */
proto.sf.antelope.type.v1.TransactionEvent.Added.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.TransactionEvent.Added;
  return proto.sf.antelope.type.v1.TransactionEvent.Added.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.TransactionEvent.Added} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.TransactionEvent.Added}
 */
proto.sf.antelope.type.v1.TransactionEvent.Added.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sf.antelope.type.v1.TransactionReceipt;
      reader.readMessage(value,proto.sf.antelope.type.v1.TransactionReceipt.deserializeBinaryFromReader);
      msg.setReceipt(value);
      break;
    case 2:
      var value = new proto.sf.antelope.type.v1.SignedTransaction;
      reader.readMessage(value,proto.sf.antelope.type.v1.SignedTransaction.deserializeBinaryFromReader);
      msg.setTransaction(value);
      break;
    case 3:
      var value = new proto.sf.antelope.type.v1.PublicKeys;
      reader.readMessage(value,proto.sf.antelope.type.v1.PublicKeys.deserializeBinaryFromReader);
      msg.setPublicKeys(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.TransactionEvent.Added.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.TransactionEvent.Added.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.TransactionEvent.Added} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.TransactionEvent.Added.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReceipt();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sf.antelope.type.v1.TransactionReceipt.serializeBinaryToWriter
    );
  }
  f = message.getTransaction();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sf.antelope.type.v1.SignedTransaction.serializeBinaryToWriter
    );
  }
  f = message.getPublicKeys();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.sf.antelope.type.v1.PublicKeys.serializeBinaryToWriter
    );
  }
};


/**
 * optional TransactionReceipt receipt = 1;
 * @return {?proto.sf.antelope.type.v1.TransactionReceipt}
 */
proto.sf.antelope.type.v1.TransactionEvent.Added.prototype.getReceipt = function() {
  return /** @type{?proto.sf.antelope.type.v1.TransactionReceipt} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.TransactionReceipt, 1));
};


/**
 * @param {?proto.sf.antelope.type.v1.TransactionReceipt|undefined} value
 * @return {!proto.sf.antelope.type.v1.TransactionEvent.Added} returns this
*/
proto.sf.antelope.type.v1.TransactionEvent.Added.prototype.setReceipt = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.TransactionEvent.Added} returns this
 */
proto.sf.antelope.type.v1.TransactionEvent.Added.prototype.clearReceipt = function() {
  return this.setReceipt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.TransactionEvent.Added.prototype.hasReceipt = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SignedTransaction transaction = 2;
 * @return {?proto.sf.antelope.type.v1.SignedTransaction}
 */
proto.sf.antelope.type.v1.TransactionEvent.Added.prototype.getTransaction = function() {
  return /** @type{?proto.sf.antelope.type.v1.SignedTransaction} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.SignedTransaction, 2));
};


/**
 * @param {?proto.sf.antelope.type.v1.SignedTransaction|undefined} value
 * @return {!proto.sf.antelope.type.v1.TransactionEvent.Added} returns this
*/
proto.sf.antelope.type.v1.TransactionEvent.Added.prototype.setTransaction = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.TransactionEvent.Added} returns this
 */
proto.sf.antelope.type.v1.TransactionEvent.Added.prototype.clearTransaction = function() {
  return this.setTransaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.TransactionEvent.Added.prototype.hasTransaction = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional PublicKeys public_keys = 3;
 * @return {?proto.sf.antelope.type.v1.PublicKeys}
 */
proto.sf.antelope.type.v1.TransactionEvent.Added.prototype.getPublicKeys = function() {
  return /** @type{?proto.sf.antelope.type.v1.PublicKeys} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.PublicKeys, 3));
};


/**
 * @param {?proto.sf.antelope.type.v1.PublicKeys|undefined} value
 * @return {!proto.sf.antelope.type.v1.TransactionEvent.Added} returns this
*/
proto.sf.antelope.type.v1.TransactionEvent.Added.prototype.setPublicKeys = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.TransactionEvent.Added} returns this
 */
proto.sf.antelope.type.v1.TransactionEvent.Added.prototype.clearPublicKeys = function() {
  return this.setPublicKeys(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.TransactionEvent.Added.prototype.hasPublicKeys = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.TransactionEvent.Executed.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.TransactionEvent.Executed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.TransactionEvent.Executed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.TransactionEvent.Executed.toObject = function(includeInstance, msg) {
  var f, obj = {
    trace: (f = msg.getTrace()) && proto.sf.antelope.type.v1.TransactionTrace.toObject(includeInstance, f),
    blockheader: (f = msg.getBlockheader()) && proto.sf.antelope.type.v1.BlockHeader.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.TransactionEvent.Executed}
 */
proto.sf.antelope.type.v1.TransactionEvent.Executed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.TransactionEvent.Executed;
  return proto.sf.antelope.type.v1.TransactionEvent.Executed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.TransactionEvent.Executed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.TransactionEvent.Executed}
 */
proto.sf.antelope.type.v1.TransactionEvent.Executed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sf.antelope.type.v1.TransactionTrace;
      reader.readMessage(value,proto.sf.antelope.type.v1.TransactionTrace.deserializeBinaryFromReader);
      msg.setTrace(value);
      break;
    case 2:
      var value = new proto.sf.antelope.type.v1.BlockHeader;
      reader.readMessage(value,proto.sf.antelope.type.v1.BlockHeader.deserializeBinaryFromReader);
      msg.setBlockheader(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.TransactionEvent.Executed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.TransactionEvent.Executed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.TransactionEvent.Executed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.TransactionEvent.Executed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrace();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sf.antelope.type.v1.TransactionTrace.serializeBinaryToWriter
    );
  }
  f = message.getBlockheader();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sf.antelope.type.v1.BlockHeader.serializeBinaryToWriter
    );
  }
};


/**
 * optional TransactionTrace trace = 1;
 * @return {?proto.sf.antelope.type.v1.TransactionTrace}
 */
proto.sf.antelope.type.v1.TransactionEvent.Executed.prototype.getTrace = function() {
  return /** @type{?proto.sf.antelope.type.v1.TransactionTrace} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.TransactionTrace, 1));
};


/**
 * @param {?proto.sf.antelope.type.v1.TransactionTrace|undefined} value
 * @return {!proto.sf.antelope.type.v1.TransactionEvent.Executed} returns this
*/
proto.sf.antelope.type.v1.TransactionEvent.Executed.prototype.setTrace = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.TransactionEvent.Executed} returns this
 */
proto.sf.antelope.type.v1.TransactionEvent.Executed.prototype.clearTrace = function() {
  return this.setTrace(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.TransactionEvent.Executed.prototype.hasTrace = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional BlockHeader blockHeader = 2;
 * @return {?proto.sf.antelope.type.v1.BlockHeader}
 */
proto.sf.antelope.type.v1.TransactionEvent.Executed.prototype.getBlockheader = function() {
  return /** @type{?proto.sf.antelope.type.v1.BlockHeader} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.BlockHeader, 2));
};


/**
 * @param {?proto.sf.antelope.type.v1.BlockHeader|undefined} value
 * @return {!proto.sf.antelope.type.v1.TransactionEvent.Executed} returns this
*/
proto.sf.antelope.type.v1.TransactionEvent.Executed.prototype.setBlockheader = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.TransactionEvent.Executed} returns this
 */
proto.sf.antelope.type.v1.TransactionEvent.Executed.prototype.clearBlockheader = function() {
  return this.setBlockheader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.TransactionEvent.Executed.prototype.hasBlockheader = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.TransactionEvent.DtrxScheduled.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.TransactionEvent.DtrxScheduled.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.TransactionEvent.DtrxScheduled} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.TransactionEvent.DtrxScheduled.toObject = function(includeInstance, msg) {
  var f, obj = {
    createdBy: (f = msg.getCreatedBy()) && proto.sf.antelope.type.v1.ExtDTrxOp.toObject(includeInstance, f),
    transaction: (f = msg.getTransaction()) && proto.sf.antelope.type.v1.SignedTransaction.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.TransactionEvent.DtrxScheduled}
 */
proto.sf.antelope.type.v1.TransactionEvent.DtrxScheduled.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.TransactionEvent.DtrxScheduled;
  return proto.sf.antelope.type.v1.TransactionEvent.DtrxScheduled.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.TransactionEvent.DtrxScheduled} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.TransactionEvent.DtrxScheduled}
 */
proto.sf.antelope.type.v1.TransactionEvent.DtrxScheduled.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sf.antelope.type.v1.ExtDTrxOp;
      reader.readMessage(value,proto.sf.antelope.type.v1.ExtDTrxOp.deserializeBinaryFromReader);
      msg.setCreatedBy(value);
      break;
    case 2:
      var value = new proto.sf.antelope.type.v1.SignedTransaction;
      reader.readMessage(value,proto.sf.antelope.type.v1.SignedTransaction.deserializeBinaryFromReader);
      msg.setTransaction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.TransactionEvent.DtrxScheduled.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.TransactionEvent.DtrxScheduled.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.TransactionEvent.DtrxScheduled} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.TransactionEvent.DtrxScheduled.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCreatedBy();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sf.antelope.type.v1.ExtDTrxOp.serializeBinaryToWriter
    );
  }
  f = message.getTransaction();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sf.antelope.type.v1.SignedTransaction.serializeBinaryToWriter
    );
  }
};


/**
 * optional ExtDTrxOp created_by = 1;
 * @return {?proto.sf.antelope.type.v1.ExtDTrxOp}
 */
proto.sf.antelope.type.v1.TransactionEvent.DtrxScheduled.prototype.getCreatedBy = function() {
  return /** @type{?proto.sf.antelope.type.v1.ExtDTrxOp} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.ExtDTrxOp, 1));
};


/**
 * @param {?proto.sf.antelope.type.v1.ExtDTrxOp|undefined} value
 * @return {!proto.sf.antelope.type.v1.TransactionEvent.DtrxScheduled} returns this
*/
proto.sf.antelope.type.v1.TransactionEvent.DtrxScheduled.prototype.setCreatedBy = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.TransactionEvent.DtrxScheduled} returns this
 */
proto.sf.antelope.type.v1.TransactionEvent.DtrxScheduled.prototype.clearCreatedBy = function() {
  return this.setCreatedBy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.TransactionEvent.DtrxScheduled.prototype.hasCreatedBy = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SignedTransaction transaction = 2;
 * @return {?proto.sf.antelope.type.v1.SignedTransaction}
 */
proto.sf.antelope.type.v1.TransactionEvent.DtrxScheduled.prototype.getTransaction = function() {
  return /** @type{?proto.sf.antelope.type.v1.SignedTransaction} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.SignedTransaction, 2));
};


/**
 * @param {?proto.sf.antelope.type.v1.SignedTransaction|undefined} value
 * @return {!proto.sf.antelope.type.v1.TransactionEvent.DtrxScheduled} returns this
*/
proto.sf.antelope.type.v1.TransactionEvent.DtrxScheduled.prototype.setTransaction = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.TransactionEvent.DtrxScheduled} returns this
 */
proto.sf.antelope.type.v1.TransactionEvent.DtrxScheduled.prototype.clearTransaction = function() {
  return this.setTransaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.TransactionEvent.DtrxScheduled.prototype.hasTransaction = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.TransactionEvent.DtrxCanceled.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.TransactionEvent.DtrxCanceled.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.TransactionEvent.DtrxCanceled} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.TransactionEvent.DtrxCanceled.toObject = function(includeInstance, msg) {
  var f, obj = {
    canceledBy: (f = msg.getCanceledBy()) && proto.sf.antelope.type.v1.ExtDTrxOp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.TransactionEvent.DtrxCanceled}
 */
proto.sf.antelope.type.v1.TransactionEvent.DtrxCanceled.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.TransactionEvent.DtrxCanceled;
  return proto.sf.antelope.type.v1.TransactionEvent.DtrxCanceled.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.TransactionEvent.DtrxCanceled} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.TransactionEvent.DtrxCanceled}
 */
proto.sf.antelope.type.v1.TransactionEvent.DtrxCanceled.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sf.antelope.type.v1.ExtDTrxOp;
      reader.readMessage(value,proto.sf.antelope.type.v1.ExtDTrxOp.deserializeBinaryFromReader);
      msg.setCanceledBy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.TransactionEvent.DtrxCanceled.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.TransactionEvent.DtrxCanceled.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.TransactionEvent.DtrxCanceled} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.TransactionEvent.DtrxCanceled.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCanceledBy();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sf.antelope.type.v1.ExtDTrxOp.serializeBinaryToWriter
    );
  }
};


/**
 * optional ExtDTrxOp canceled_by = 1;
 * @return {?proto.sf.antelope.type.v1.ExtDTrxOp}
 */
proto.sf.antelope.type.v1.TransactionEvent.DtrxCanceled.prototype.getCanceledBy = function() {
  return /** @type{?proto.sf.antelope.type.v1.ExtDTrxOp} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.ExtDTrxOp, 1));
};


/**
 * @param {?proto.sf.antelope.type.v1.ExtDTrxOp|undefined} value
 * @return {!proto.sf.antelope.type.v1.TransactionEvent.DtrxCanceled} returns this
*/
proto.sf.antelope.type.v1.TransactionEvent.DtrxCanceled.prototype.setCanceledBy = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.TransactionEvent.DtrxCanceled} returns this
 */
proto.sf.antelope.type.v1.TransactionEvent.DtrxCanceled.prototype.clearCanceledBy = function() {
  return this.setCanceledBy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.TransactionEvent.DtrxCanceled.prototype.hasCanceledBy = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.sf.antelope.type.v1.TransactionEvent.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.TransactionEvent} returns this
 */
proto.sf.antelope.type.v1.TransactionEvent.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string block_id = 2;
 * @return {string}
 */
proto.sf.antelope.type.v1.TransactionEvent.prototype.getBlockId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.TransactionEvent} returns this
 */
proto.sf.antelope.type.v1.TransactionEvent.prototype.setBlockId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 block_num = 3;
 * @return {number}
 */
proto.sf.antelope.type.v1.TransactionEvent.prototype.getBlockNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.TransactionEvent} returns this
 */
proto.sf.antelope.type.v1.TransactionEvent.prototype.setBlockNum = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool irreversible = 4;
 * @return {boolean}
 */
proto.sf.antelope.type.v1.TransactionEvent.prototype.getIrreversible = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sf.antelope.type.v1.TransactionEvent} returns this
 */
proto.sf.antelope.type.v1.TransactionEvent.prototype.setIrreversible = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional AddedInternally internal_addition = 5;
 * @return {?proto.sf.antelope.type.v1.TransactionEvent.AddedInternally}
 */
proto.sf.antelope.type.v1.TransactionEvent.prototype.getInternalAddition = function() {
  return /** @type{?proto.sf.antelope.type.v1.TransactionEvent.AddedInternally} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.TransactionEvent.AddedInternally, 5));
};


/**
 * @param {?proto.sf.antelope.type.v1.TransactionEvent.AddedInternally|undefined} value
 * @return {!proto.sf.antelope.type.v1.TransactionEvent} returns this
*/
proto.sf.antelope.type.v1.TransactionEvent.prototype.setInternalAddition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.sf.antelope.type.v1.TransactionEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.TransactionEvent} returns this
 */
proto.sf.antelope.type.v1.TransactionEvent.prototype.clearInternalAddition = function() {
  return this.setInternalAddition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.TransactionEvent.prototype.hasInternalAddition = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Added addition = 6;
 * @return {?proto.sf.antelope.type.v1.TransactionEvent.Added}
 */
proto.sf.antelope.type.v1.TransactionEvent.prototype.getAddition = function() {
  return /** @type{?proto.sf.antelope.type.v1.TransactionEvent.Added} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.TransactionEvent.Added, 6));
};


/**
 * @param {?proto.sf.antelope.type.v1.TransactionEvent.Added|undefined} value
 * @return {!proto.sf.antelope.type.v1.TransactionEvent} returns this
*/
proto.sf.antelope.type.v1.TransactionEvent.prototype.setAddition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.sf.antelope.type.v1.TransactionEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.TransactionEvent} returns this
 */
proto.sf.antelope.type.v1.TransactionEvent.prototype.clearAddition = function() {
  return this.setAddition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.TransactionEvent.prototype.hasAddition = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Executed execution = 7;
 * @return {?proto.sf.antelope.type.v1.TransactionEvent.Executed}
 */
proto.sf.antelope.type.v1.TransactionEvent.prototype.getExecution = function() {
  return /** @type{?proto.sf.antelope.type.v1.TransactionEvent.Executed} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.TransactionEvent.Executed, 7));
};


/**
 * @param {?proto.sf.antelope.type.v1.TransactionEvent.Executed|undefined} value
 * @return {!proto.sf.antelope.type.v1.TransactionEvent} returns this
*/
proto.sf.antelope.type.v1.TransactionEvent.prototype.setExecution = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.sf.antelope.type.v1.TransactionEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.TransactionEvent} returns this
 */
proto.sf.antelope.type.v1.TransactionEvent.prototype.clearExecution = function() {
  return this.setExecution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.TransactionEvent.prototype.hasExecution = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional DtrxScheduled dtrx_scheduling = 8;
 * @return {?proto.sf.antelope.type.v1.TransactionEvent.DtrxScheduled}
 */
proto.sf.antelope.type.v1.TransactionEvent.prototype.getDtrxScheduling = function() {
  return /** @type{?proto.sf.antelope.type.v1.TransactionEvent.DtrxScheduled} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.TransactionEvent.DtrxScheduled, 8));
};


/**
 * @param {?proto.sf.antelope.type.v1.TransactionEvent.DtrxScheduled|undefined} value
 * @return {!proto.sf.antelope.type.v1.TransactionEvent} returns this
*/
proto.sf.antelope.type.v1.TransactionEvent.prototype.setDtrxScheduling = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.sf.antelope.type.v1.TransactionEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.TransactionEvent} returns this
 */
proto.sf.antelope.type.v1.TransactionEvent.prototype.clearDtrxScheduling = function() {
  return this.setDtrxScheduling(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.TransactionEvent.prototype.hasDtrxScheduling = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional DtrxCanceled dtrx_cancellation = 9;
 * @return {?proto.sf.antelope.type.v1.TransactionEvent.DtrxCanceled}
 */
proto.sf.antelope.type.v1.TransactionEvent.prototype.getDtrxCancellation = function() {
  return /** @type{?proto.sf.antelope.type.v1.TransactionEvent.DtrxCanceled} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.TransactionEvent.DtrxCanceled, 9));
};


/**
 * @param {?proto.sf.antelope.type.v1.TransactionEvent.DtrxCanceled|undefined} value
 * @return {!proto.sf.antelope.type.v1.TransactionEvent} returns this
*/
proto.sf.antelope.type.v1.TransactionEvent.prototype.setDtrxCancellation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.sf.antelope.type.v1.TransactionEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.TransactionEvent} returns this
 */
proto.sf.antelope.type.v1.TransactionEvent.prototype.clearDtrxCancellation = function() {
  return this.setDtrxCancellation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.TransactionEvent.prototype.hasDtrxCancellation = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sf.antelope.type.v1.PublicKeys.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.PublicKeys.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.PublicKeys.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.PublicKeys} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.PublicKeys.toObject = function(includeInstance, msg) {
  var f, obj = {
    publicKeysList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.PublicKeys}
 */
proto.sf.antelope.type.v1.PublicKeys.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.PublicKeys;
  return proto.sf.antelope.type.v1.PublicKeys.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.PublicKeys} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.PublicKeys}
 */
proto.sf.antelope.type.v1.PublicKeys.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addPublicKeys(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.PublicKeys.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.PublicKeys.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.PublicKeys} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.PublicKeys.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublicKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string public_keys = 1;
 * @return {!Array<string>}
 */
proto.sf.antelope.type.v1.PublicKeys.prototype.getPublicKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sf.antelope.type.v1.PublicKeys} returns this
 */
proto.sf.antelope.type.v1.PublicKeys.prototype.setPublicKeysList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.PublicKeys} returns this
 */
proto.sf.antelope.type.v1.PublicKeys.prototype.addPublicKeys = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.PublicKeys} returns this
 */
proto.sf.antelope.type.v1.PublicKeys.prototype.clearPublicKeysList = function() {
  return this.setPublicKeysList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sf.antelope.type.v1.TransactionLifecycle.repeatedFields_ = [19];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.TransactionLifecycle.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.TransactionLifecycle.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.TransactionLifecycle} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.TransactionLifecycle.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    transactionStatus: jspb.Message.getFieldWithDefault(msg, 2, 0),
    transactionReceipt: (f = msg.getTransactionReceipt()) && proto.sf.antelope.type.v1.TransactionReceipt.toObject(includeInstance, f),
    transaction: (f = msg.getTransaction()) && proto.sf.antelope.type.v1.SignedTransaction.toObject(includeInstance, f),
    publicKeysList: (f = jspb.Message.getRepeatedField(msg, 19)) == null ? undefined : f,
    executionTrace: (f = msg.getExecutionTrace()) && proto.sf.antelope.type.v1.TransactionTrace.toObject(includeInstance, f),
    executionBlockHeader: (f = msg.getExecutionBlockHeader()) && proto.sf.antelope.type.v1.BlockHeader.toObject(includeInstance, f),
    createdBy: (f = msg.getCreatedBy()) && proto.sf.antelope.type.v1.ExtDTrxOp.toObject(includeInstance, f),
    canceledBy: (f = msg.getCanceledBy()) && proto.sf.antelope.type.v1.ExtDTrxOp.toObject(includeInstance, f),
    creationIrreversible: jspb.Message.getBooleanFieldWithDefault(msg, 33, false),
    executionIrreversible: jspb.Message.getBooleanFieldWithDefault(msg, 34, false),
    cancelationIrreversible: jspb.Message.getBooleanFieldWithDefault(msg, 35, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.TransactionLifecycle}
 */
proto.sf.antelope.type.v1.TransactionLifecycle.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.TransactionLifecycle;
  return proto.sf.antelope.type.v1.TransactionLifecycle.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.TransactionLifecycle} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.TransactionLifecycle}
 */
proto.sf.antelope.type.v1.TransactionLifecycle.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!proto.sf.antelope.type.v1.TransactionStatus} */ (reader.readEnum());
      msg.setTransactionStatus(value);
      break;
    case 36:
      var value = new proto.sf.antelope.type.v1.TransactionReceipt;
      reader.readMessage(value,proto.sf.antelope.type.v1.TransactionReceipt.deserializeBinaryFromReader);
      msg.setTransactionReceipt(value);
      break;
    case 10:
      var value = new proto.sf.antelope.type.v1.SignedTransaction;
      reader.readMessage(value,proto.sf.antelope.type.v1.SignedTransaction.deserializeBinaryFromReader);
      msg.setTransaction(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.addPublicKeys(value);
      break;
    case 11:
      var value = new proto.sf.antelope.type.v1.TransactionTrace;
      reader.readMessage(value,proto.sf.antelope.type.v1.TransactionTrace.deserializeBinaryFromReader);
      msg.setExecutionTrace(value);
      break;
    case 12:
      var value = new proto.sf.antelope.type.v1.BlockHeader;
      reader.readMessage(value,proto.sf.antelope.type.v1.BlockHeader.deserializeBinaryFromReader);
      msg.setExecutionBlockHeader(value);
      break;
    case 20:
      var value = new proto.sf.antelope.type.v1.ExtDTrxOp;
      reader.readMessage(value,proto.sf.antelope.type.v1.ExtDTrxOp.deserializeBinaryFromReader);
      msg.setCreatedBy(value);
      break;
    case 21:
      var value = new proto.sf.antelope.type.v1.ExtDTrxOp;
      reader.readMessage(value,proto.sf.antelope.type.v1.ExtDTrxOp.deserializeBinaryFromReader);
      msg.setCanceledBy(value);
      break;
    case 33:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCreationIrreversible(value);
      break;
    case 34:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExecutionIrreversible(value);
      break;
    case 35:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCancelationIrreversible(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.TransactionLifecycle.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.TransactionLifecycle.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.TransactionLifecycle} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.TransactionLifecycle.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTransactionStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getTransactionReceipt();
  if (f != null) {
    writer.writeMessage(
      36,
      f,
      proto.sf.antelope.type.v1.TransactionReceipt.serializeBinaryToWriter
    );
  }
  f = message.getTransaction();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.sf.antelope.type.v1.SignedTransaction.serializeBinaryToWriter
    );
  }
  f = message.getPublicKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      19,
      f
    );
  }
  f = message.getExecutionTrace();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.sf.antelope.type.v1.TransactionTrace.serializeBinaryToWriter
    );
  }
  f = message.getExecutionBlockHeader();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.sf.antelope.type.v1.BlockHeader.serializeBinaryToWriter
    );
  }
  f = message.getCreatedBy();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.sf.antelope.type.v1.ExtDTrxOp.serializeBinaryToWriter
    );
  }
  f = message.getCanceledBy();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.sf.antelope.type.v1.ExtDTrxOp.serializeBinaryToWriter
    );
  }
  f = message.getCreationIrreversible();
  if (f) {
    writer.writeBool(
      33,
      f
    );
  }
  f = message.getExecutionIrreversible();
  if (f) {
    writer.writeBool(
      34,
      f
    );
  }
  f = message.getCancelationIrreversible();
  if (f) {
    writer.writeBool(
      35,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.sf.antelope.type.v1.TransactionLifecycle.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.TransactionLifecycle} returns this
 */
proto.sf.antelope.type.v1.TransactionLifecycle.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional TransactionStatus transaction_status = 2;
 * @return {!proto.sf.antelope.type.v1.TransactionStatus}
 */
proto.sf.antelope.type.v1.TransactionLifecycle.prototype.getTransactionStatus = function() {
  return /** @type {!proto.sf.antelope.type.v1.TransactionStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.sf.antelope.type.v1.TransactionStatus} value
 * @return {!proto.sf.antelope.type.v1.TransactionLifecycle} returns this
 */
proto.sf.antelope.type.v1.TransactionLifecycle.prototype.setTransactionStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional TransactionReceipt transaction_receipt = 36;
 * @return {?proto.sf.antelope.type.v1.TransactionReceipt}
 */
proto.sf.antelope.type.v1.TransactionLifecycle.prototype.getTransactionReceipt = function() {
  return /** @type{?proto.sf.antelope.type.v1.TransactionReceipt} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.TransactionReceipt, 36));
};


/**
 * @param {?proto.sf.antelope.type.v1.TransactionReceipt|undefined} value
 * @return {!proto.sf.antelope.type.v1.TransactionLifecycle} returns this
*/
proto.sf.antelope.type.v1.TransactionLifecycle.prototype.setTransactionReceipt = function(value) {
  return jspb.Message.setWrapperField(this, 36, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.TransactionLifecycle} returns this
 */
proto.sf.antelope.type.v1.TransactionLifecycle.prototype.clearTransactionReceipt = function() {
  return this.setTransactionReceipt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.TransactionLifecycle.prototype.hasTransactionReceipt = function() {
  return jspb.Message.getField(this, 36) != null;
};


/**
 * optional SignedTransaction transaction = 10;
 * @return {?proto.sf.antelope.type.v1.SignedTransaction}
 */
proto.sf.antelope.type.v1.TransactionLifecycle.prototype.getTransaction = function() {
  return /** @type{?proto.sf.antelope.type.v1.SignedTransaction} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.SignedTransaction, 10));
};


/**
 * @param {?proto.sf.antelope.type.v1.SignedTransaction|undefined} value
 * @return {!proto.sf.antelope.type.v1.TransactionLifecycle} returns this
*/
proto.sf.antelope.type.v1.TransactionLifecycle.prototype.setTransaction = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.TransactionLifecycle} returns this
 */
proto.sf.antelope.type.v1.TransactionLifecycle.prototype.clearTransaction = function() {
  return this.setTransaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.TransactionLifecycle.prototype.hasTransaction = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * repeated string public_keys = 19;
 * @return {!Array<string>}
 */
proto.sf.antelope.type.v1.TransactionLifecycle.prototype.getPublicKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 19));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sf.antelope.type.v1.TransactionLifecycle} returns this
 */
proto.sf.antelope.type.v1.TransactionLifecycle.prototype.setPublicKeysList = function(value) {
  return jspb.Message.setField(this, 19, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.TransactionLifecycle} returns this
 */
proto.sf.antelope.type.v1.TransactionLifecycle.prototype.addPublicKeys = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 19, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.TransactionLifecycle} returns this
 */
proto.sf.antelope.type.v1.TransactionLifecycle.prototype.clearPublicKeysList = function() {
  return this.setPublicKeysList([]);
};


/**
 * optional TransactionTrace execution_trace = 11;
 * @return {?proto.sf.antelope.type.v1.TransactionTrace}
 */
proto.sf.antelope.type.v1.TransactionLifecycle.prototype.getExecutionTrace = function() {
  return /** @type{?proto.sf.antelope.type.v1.TransactionTrace} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.TransactionTrace, 11));
};


/**
 * @param {?proto.sf.antelope.type.v1.TransactionTrace|undefined} value
 * @return {!proto.sf.antelope.type.v1.TransactionLifecycle} returns this
*/
proto.sf.antelope.type.v1.TransactionLifecycle.prototype.setExecutionTrace = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.TransactionLifecycle} returns this
 */
proto.sf.antelope.type.v1.TransactionLifecycle.prototype.clearExecutionTrace = function() {
  return this.setExecutionTrace(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.TransactionLifecycle.prototype.hasExecutionTrace = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional BlockHeader execution_block_header = 12;
 * @return {?proto.sf.antelope.type.v1.BlockHeader}
 */
proto.sf.antelope.type.v1.TransactionLifecycle.prototype.getExecutionBlockHeader = function() {
  return /** @type{?proto.sf.antelope.type.v1.BlockHeader} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.BlockHeader, 12));
};


/**
 * @param {?proto.sf.antelope.type.v1.BlockHeader|undefined} value
 * @return {!proto.sf.antelope.type.v1.TransactionLifecycle} returns this
*/
proto.sf.antelope.type.v1.TransactionLifecycle.prototype.setExecutionBlockHeader = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.TransactionLifecycle} returns this
 */
proto.sf.antelope.type.v1.TransactionLifecycle.prototype.clearExecutionBlockHeader = function() {
  return this.setExecutionBlockHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.TransactionLifecycle.prototype.hasExecutionBlockHeader = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional ExtDTrxOp created_by = 20;
 * @return {?proto.sf.antelope.type.v1.ExtDTrxOp}
 */
proto.sf.antelope.type.v1.TransactionLifecycle.prototype.getCreatedBy = function() {
  return /** @type{?proto.sf.antelope.type.v1.ExtDTrxOp} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.ExtDTrxOp, 20));
};


/**
 * @param {?proto.sf.antelope.type.v1.ExtDTrxOp|undefined} value
 * @return {!proto.sf.antelope.type.v1.TransactionLifecycle} returns this
*/
proto.sf.antelope.type.v1.TransactionLifecycle.prototype.setCreatedBy = function(value) {
  return jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.TransactionLifecycle} returns this
 */
proto.sf.antelope.type.v1.TransactionLifecycle.prototype.clearCreatedBy = function() {
  return this.setCreatedBy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.TransactionLifecycle.prototype.hasCreatedBy = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional ExtDTrxOp canceled_by = 21;
 * @return {?proto.sf.antelope.type.v1.ExtDTrxOp}
 */
proto.sf.antelope.type.v1.TransactionLifecycle.prototype.getCanceledBy = function() {
  return /** @type{?proto.sf.antelope.type.v1.ExtDTrxOp} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.ExtDTrxOp, 21));
};


/**
 * @param {?proto.sf.antelope.type.v1.ExtDTrxOp|undefined} value
 * @return {!proto.sf.antelope.type.v1.TransactionLifecycle} returns this
*/
proto.sf.antelope.type.v1.TransactionLifecycle.prototype.setCanceledBy = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.TransactionLifecycle} returns this
 */
proto.sf.antelope.type.v1.TransactionLifecycle.prototype.clearCanceledBy = function() {
  return this.setCanceledBy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.TransactionLifecycle.prototype.hasCanceledBy = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional bool creation_irreversible = 33;
 * @return {boolean}
 */
proto.sf.antelope.type.v1.TransactionLifecycle.prototype.getCreationIrreversible = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 33, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sf.antelope.type.v1.TransactionLifecycle} returns this
 */
proto.sf.antelope.type.v1.TransactionLifecycle.prototype.setCreationIrreversible = function(value) {
  return jspb.Message.setProto3BooleanField(this, 33, value);
};


/**
 * optional bool execution_irreversible = 34;
 * @return {boolean}
 */
proto.sf.antelope.type.v1.TransactionLifecycle.prototype.getExecutionIrreversible = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 34, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sf.antelope.type.v1.TransactionLifecycle} returns this
 */
proto.sf.antelope.type.v1.TransactionLifecycle.prototype.setExecutionIrreversible = function(value) {
  return jspb.Message.setProto3BooleanField(this, 34, value);
};


/**
 * optional bool cancelation_irreversible = 35;
 * @return {boolean}
 */
proto.sf.antelope.type.v1.TransactionLifecycle.prototype.getCancelationIrreversible = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 35, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sf.antelope.type.v1.TransactionLifecycle} returns this
 */
proto.sf.antelope.type.v1.TransactionLifecycle.prototype.setCancelationIrreversible = function(value) {
  return jspb.Message.setProto3BooleanField(this, 35, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sf.antelope.type.v1.SignedTransaction.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.SignedTransaction.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.SignedTransaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.SignedTransaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.SignedTransaction.toObject = function(includeInstance, msg) {
  var f, obj = {
    transaction: (f = msg.getTransaction()) && proto.sf.antelope.type.v1.Transaction.toObject(includeInstance, f),
    signaturesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    contextFreeDataList: msg.getContextFreeDataList_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.SignedTransaction}
 */
proto.sf.antelope.type.v1.SignedTransaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.SignedTransaction;
  return proto.sf.antelope.type.v1.SignedTransaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.SignedTransaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.SignedTransaction}
 */
proto.sf.antelope.type.v1.SignedTransaction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sf.antelope.type.v1.Transaction;
      reader.readMessage(value,proto.sf.antelope.type.v1.Transaction.deserializeBinaryFromReader);
      msg.setTransaction(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addSignatures(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addContextFreeData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.SignedTransaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.SignedTransaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.SignedTransaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.SignedTransaction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransaction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sf.antelope.type.v1.Transaction.serializeBinaryToWriter
    );
  }
  f = message.getSignaturesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getContextFreeDataList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      3,
      f
    );
  }
};


/**
 * optional Transaction transaction = 1;
 * @return {?proto.sf.antelope.type.v1.Transaction}
 */
proto.sf.antelope.type.v1.SignedTransaction.prototype.getTransaction = function() {
  return /** @type{?proto.sf.antelope.type.v1.Transaction} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.Transaction, 1));
};


/**
 * @param {?proto.sf.antelope.type.v1.Transaction|undefined} value
 * @return {!proto.sf.antelope.type.v1.SignedTransaction} returns this
*/
proto.sf.antelope.type.v1.SignedTransaction.prototype.setTransaction = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.SignedTransaction} returns this
 */
proto.sf.antelope.type.v1.SignedTransaction.prototype.clearTransaction = function() {
  return this.setTransaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.SignedTransaction.prototype.hasTransaction = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string signatures = 2;
 * @return {!Array<string>}
 */
proto.sf.antelope.type.v1.SignedTransaction.prototype.getSignaturesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sf.antelope.type.v1.SignedTransaction} returns this
 */
proto.sf.antelope.type.v1.SignedTransaction.prototype.setSignaturesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.SignedTransaction} returns this
 */
proto.sf.antelope.type.v1.SignedTransaction.prototype.addSignatures = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.SignedTransaction} returns this
 */
proto.sf.antelope.type.v1.SignedTransaction.prototype.clearSignaturesList = function() {
  return this.setSignaturesList([]);
};


/**
 * repeated bytes context_free_data = 3;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.sf.antelope.type.v1.SignedTransaction.prototype.getContextFreeDataList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * repeated bytes context_free_data = 3;
 * This is a type-conversion wrapper around `getContextFreeDataList()`
 * @return {!Array<string>}
 */
proto.sf.antelope.type.v1.SignedTransaction.prototype.getContextFreeDataList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getContextFreeDataList()));
};


/**
 * repeated bytes context_free_data = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getContextFreeDataList()`
 * @return {!Array<!Uint8Array>}
 */
proto.sf.antelope.type.v1.SignedTransaction.prototype.getContextFreeDataList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getContextFreeDataList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.sf.antelope.type.v1.SignedTransaction} returns this
 */
proto.sf.antelope.type.v1.SignedTransaction.prototype.setContextFreeDataList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.SignedTransaction} returns this
 */
proto.sf.antelope.type.v1.SignedTransaction.prototype.addContextFreeData = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.SignedTransaction} returns this
 */
proto.sf.antelope.type.v1.SignedTransaction.prototype.clearContextFreeDataList = function() {
  return this.setContextFreeDataList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sf.antelope.type.v1.Transaction.repeatedFields_ = [2,3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.Transaction.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.Transaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.Transaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.Transaction.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.sf.antelope.type.v1.TransactionHeader.toObject(includeInstance, f),
    contextFreeActionsList: jspb.Message.toObjectList(msg.getContextFreeActionsList(),
    proto.sf.antelope.type.v1.Action.toObject, includeInstance),
    actionsList: jspb.Message.toObjectList(msg.getActionsList(),
    proto.sf.antelope.type.v1.Action.toObject, includeInstance),
    extensionsList: jspb.Message.toObjectList(msg.getExtensionsList(),
    proto.sf.antelope.type.v1.Extension.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.Transaction}
 */
proto.sf.antelope.type.v1.Transaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.Transaction;
  return proto.sf.antelope.type.v1.Transaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.Transaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.Transaction}
 */
proto.sf.antelope.type.v1.Transaction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sf.antelope.type.v1.TransactionHeader;
      reader.readMessage(value,proto.sf.antelope.type.v1.TransactionHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.sf.antelope.type.v1.Action;
      reader.readMessage(value,proto.sf.antelope.type.v1.Action.deserializeBinaryFromReader);
      msg.addContextFreeActions(value);
      break;
    case 3:
      var value = new proto.sf.antelope.type.v1.Action;
      reader.readMessage(value,proto.sf.antelope.type.v1.Action.deserializeBinaryFromReader);
      msg.addActions(value);
      break;
    case 4:
      var value = new proto.sf.antelope.type.v1.Extension;
      reader.readMessage(value,proto.sf.antelope.type.v1.Extension.deserializeBinaryFromReader);
      msg.addExtensions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.Transaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.Transaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.Transaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.Transaction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sf.antelope.type.v1.TransactionHeader.serializeBinaryToWriter
    );
  }
  f = message.getContextFreeActionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.sf.antelope.type.v1.Action.serializeBinaryToWriter
    );
  }
  f = message.getActionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.sf.antelope.type.v1.Action.serializeBinaryToWriter
    );
  }
  f = message.getExtensionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.sf.antelope.type.v1.Extension.serializeBinaryToWriter
    );
  }
};


/**
 * optional TransactionHeader header = 1;
 * @return {?proto.sf.antelope.type.v1.TransactionHeader}
 */
proto.sf.antelope.type.v1.Transaction.prototype.getHeader = function() {
  return /** @type{?proto.sf.antelope.type.v1.TransactionHeader} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.TransactionHeader, 1));
};


/**
 * @param {?proto.sf.antelope.type.v1.TransactionHeader|undefined} value
 * @return {!proto.sf.antelope.type.v1.Transaction} returns this
*/
proto.sf.antelope.type.v1.Transaction.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.Transaction} returns this
 */
proto.sf.antelope.type.v1.Transaction.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.Transaction.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Action context_free_actions = 2;
 * @return {!Array<!proto.sf.antelope.type.v1.Action>}
 */
proto.sf.antelope.type.v1.Transaction.prototype.getContextFreeActionsList = function() {
  return /** @type{!Array<!proto.sf.antelope.type.v1.Action>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sf.antelope.type.v1.Action, 2));
};


/**
 * @param {!Array<!proto.sf.antelope.type.v1.Action>} value
 * @return {!proto.sf.antelope.type.v1.Transaction} returns this
*/
proto.sf.antelope.type.v1.Transaction.prototype.setContextFreeActionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.sf.antelope.type.v1.Action=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.Action}
 */
proto.sf.antelope.type.v1.Transaction.prototype.addContextFreeActions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.sf.antelope.type.v1.Action, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.Transaction} returns this
 */
proto.sf.antelope.type.v1.Transaction.prototype.clearContextFreeActionsList = function() {
  return this.setContextFreeActionsList([]);
};


/**
 * repeated Action actions = 3;
 * @return {!Array<!proto.sf.antelope.type.v1.Action>}
 */
proto.sf.antelope.type.v1.Transaction.prototype.getActionsList = function() {
  return /** @type{!Array<!proto.sf.antelope.type.v1.Action>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sf.antelope.type.v1.Action, 3));
};


/**
 * @param {!Array<!proto.sf.antelope.type.v1.Action>} value
 * @return {!proto.sf.antelope.type.v1.Transaction} returns this
*/
proto.sf.antelope.type.v1.Transaction.prototype.setActionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.sf.antelope.type.v1.Action=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.Action}
 */
proto.sf.antelope.type.v1.Transaction.prototype.addActions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.sf.antelope.type.v1.Action, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.Transaction} returns this
 */
proto.sf.antelope.type.v1.Transaction.prototype.clearActionsList = function() {
  return this.setActionsList([]);
};


/**
 * repeated Extension extensions = 4;
 * @return {!Array<!proto.sf.antelope.type.v1.Extension>}
 */
proto.sf.antelope.type.v1.Transaction.prototype.getExtensionsList = function() {
  return /** @type{!Array<!proto.sf.antelope.type.v1.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sf.antelope.type.v1.Extension, 4));
};


/**
 * @param {!Array<!proto.sf.antelope.type.v1.Extension>} value
 * @return {!proto.sf.antelope.type.v1.Transaction} returns this
*/
proto.sf.antelope.type.v1.Transaction.prototype.setExtensionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.sf.antelope.type.v1.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.Extension}
 */
proto.sf.antelope.type.v1.Transaction.prototype.addExtensions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.sf.antelope.type.v1.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.Transaction} returns this
 */
proto.sf.antelope.type.v1.Transaction.prototype.clearExtensionsList = function() {
  return this.setExtensionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.TransactionHeader.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.TransactionHeader.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.TransactionHeader} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.TransactionHeader.toObject = function(includeInstance, msg) {
  var f, obj = {
    expiration: (f = msg.getExpiration()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    refBlockNum: jspb.Message.getFieldWithDefault(msg, 2, 0),
    refBlockPrefix: jspb.Message.getFieldWithDefault(msg, 3, 0),
    maxNetUsageWords: jspb.Message.getFieldWithDefault(msg, 4, 0),
    maxCpuUsageMs: jspb.Message.getFieldWithDefault(msg, 5, 0),
    delaySec: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.TransactionHeader}
 */
proto.sf.antelope.type.v1.TransactionHeader.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.TransactionHeader;
  return proto.sf.antelope.type.v1.TransactionHeader.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.TransactionHeader} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.TransactionHeader}
 */
proto.sf.antelope.type.v1.TransactionHeader.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpiration(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRefBlockNum(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRefBlockPrefix(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaxNetUsageWords(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaxCpuUsageMs(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDelaySec(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.TransactionHeader.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.TransactionHeader.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.TransactionHeader} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.TransactionHeader.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExpiration();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getRefBlockNum();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getRefBlockPrefix();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getMaxNetUsageWords();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getMaxCpuUsageMs();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getDelaySec();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
};


/**
 * optional google.protobuf.Timestamp expiration = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.sf.antelope.type.v1.TransactionHeader.prototype.getExpiration = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.sf.antelope.type.v1.TransactionHeader} returns this
*/
proto.sf.antelope.type.v1.TransactionHeader.prototype.setExpiration = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.TransactionHeader} returns this
 */
proto.sf.antelope.type.v1.TransactionHeader.prototype.clearExpiration = function() {
  return this.setExpiration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.TransactionHeader.prototype.hasExpiration = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 ref_block_num = 2;
 * @return {number}
 */
proto.sf.antelope.type.v1.TransactionHeader.prototype.getRefBlockNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.TransactionHeader} returns this
 */
proto.sf.antelope.type.v1.TransactionHeader.prototype.setRefBlockNum = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 ref_block_prefix = 3;
 * @return {number}
 */
proto.sf.antelope.type.v1.TransactionHeader.prototype.getRefBlockPrefix = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.TransactionHeader} returns this
 */
proto.sf.antelope.type.v1.TransactionHeader.prototype.setRefBlockPrefix = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 max_net_usage_words = 4;
 * @return {number}
 */
proto.sf.antelope.type.v1.TransactionHeader.prototype.getMaxNetUsageWords = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.TransactionHeader} returns this
 */
proto.sf.antelope.type.v1.TransactionHeader.prototype.setMaxNetUsageWords = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 max_cpu_usage_ms = 5;
 * @return {number}
 */
proto.sf.antelope.type.v1.TransactionHeader.prototype.getMaxCpuUsageMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.TransactionHeader} returns this
 */
proto.sf.antelope.type.v1.TransactionHeader.prototype.setMaxCpuUsageMs = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 delay_sec = 6;
 * @return {number}
 */
proto.sf.antelope.type.v1.TransactionHeader.prototype.getDelaySec = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.TransactionHeader} returns this
 */
proto.sf.antelope.type.v1.TransactionHeader.prototype.setDelaySec = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sf.antelope.type.v1.TransactionTrace.repeatedFields_ = [9,17,18,19,20,21,22,23,24,25];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.TransactionTrace.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.TransactionTrace} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.TransactionTrace.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blockNum: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    index: jspb.Message.getFieldWithDefault(msg, 26, "0"),
    blockTime: (f = msg.getBlockTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    producerBlockId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    receipt: (f = msg.getReceipt()) && proto.sf.antelope.type.v1.TransactionReceiptHeader.toObject(includeInstance, f),
    elapsed: jspb.Message.getFieldWithDefault(msg, 6, 0),
    netUsage: jspb.Message.getFieldWithDefault(msg, 7, "0"),
    scheduled: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    actionTracesList: jspb.Message.toObjectList(msg.getActionTracesList(),
    proto.sf.antelope.type.v1.ActionTrace.toObject, includeInstance),
    failedDtrxTrace: (f = msg.getFailedDtrxTrace()) && proto.sf.antelope.type.v1.TransactionTrace.toObject(includeInstance, f),
    exception: (f = msg.getException()) && proto.sf.antelope.type.v1.Exception.toObject(includeInstance, f),
    errorCode: jspb.Message.getFieldWithDefault(msg, 16, "0"),
    dbOpsList: jspb.Message.toObjectList(msg.getDbOpsList(),
    proto.sf.antelope.type.v1.DBOp.toObject, includeInstance),
    dtrxOpsList: jspb.Message.toObjectList(msg.getDtrxOpsList(),
    proto.sf.antelope.type.v1.DTrxOp.toObject, includeInstance),
    featureOpsList: jspb.Message.toObjectList(msg.getFeatureOpsList(),
    proto.sf.antelope.type.v1.FeatureOp.toObject, includeInstance),
    permOpsList: jspb.Message.toObjectList(msg.getPermOpsList(),
    proto.sf.antelope.type.v1.PermOp.toObject, includeInstance),
    ramOpsList: jspb.Message.toObjectList(msg.getRamOpsList(),
    proto.sf.antelope.type.v1.RAMOp.toObject, includeInstance),
    ramCorrectionOpsList: jspb.Message.toObjectList(msg.getRamCorrectionOpsList(),
    proto.sf.antelope.type.v1.RAMCorrectionOp.toObject, includeInstance),
    rlimitOpsList: jspb.Message.toObjectList(msg.getRlimitOpsList(),
    proto.sf.antelope.type.v1.RlimitOp.toObject, includeInstance),
    tableOpsList: jspb.Message.toObjectList(msg.getTableOpsList(),
    proto.sf.antelope.type.v1.TableOp.toObject, includeInstance),
    creationTreeList: jspb.Message.toObjectList(msg.getCreationTreeList(),
    proto.sf.antelope.type.v1.CreationFlatNode.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.TransactionTrace}
 */
proto.sf.antelope.type.v1.TransactionTrace.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.TransactionTrace;
  return proto.sf.antelope.type.v1.TransactionTrace.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.TransactionTrace} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.TransactionTrace}
 */
proto.sf.antelope.type.v1.TransactionTrace.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setBlockNum(value);
      break;
    case 26:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setIndex(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setBlockTime(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setProducerBlockId(value);
      break;
    case 5:
      var value = new proto.sf.antelope.type.v1.TransactionReceiptHeader;
      reader.readMessage(value,proto.sf.antelope.type.v1.TransactionReceiptHeader.deserializeBinaryFromReader);
      msg.setReceipt(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setElapsed(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setNetUsage(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setScheduled(value);
      break;
    case 9:
      var value = new proto.sf.antelope.type.v1.ActionTrace;
      reader.readMessage(value,proto.sf.antelope.type.v1.ActionTrace.deserializeBinaryFromReader);
      msg.addActionTraces(value);
      break;
    case 10:
      var value = new proto.sf.antelope.type.v1.TransactionTrace;
      reader.readMessage(value,proto.sf.antelope.type.v1.TransactionTrace.deserializeBinaryFromReader);
      msg.setFailedDtrxTrace(value);
      break;
    case 15:
      var value = new proto.sf.antelope.type.v1.Exception;
      reader.readMessage(value,proto.sf.antelope.type.v1.Exception.deserializeBinaryFromReader);
      msg.setException(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setErrorCode(value);
      break;
    case 17:
      var value = new proto.sf.antelope.type.v1.DBOp;
      reader.readMessage(value,proto.sf.antelope.type.v1.DBOp.deserializeBinaryFromReader);
      msg.addDbOps(value);
      break;
    case 18:
      var value = new proto.sf.antelope.type.v1.DTrxOp;
      reader.readMessage(value,proto.sf.antelope.type.v1.DTrxOp.deserializeBinaryFromReader);
      msg.addDtrxOps(value);
      break;
    case 19:
      var value = new proto.sf.antelope.type.v1.FeatureOp;
      reader.readMessage(value,proto.sf.antelope.type.v1.FeatureOp.deserializeBinaryFromReader);
      msg.addFeatureOps(value);
      break;
    case 20:
      var value = new proto.sf.antelope.type.v1.PermOp;
      reader.readMessage(value,proto.sf.antelope.type.v1.PermOp.deserializeBinaryFromReader);
      msg.addPermOps(value);
      break;
    case 21:
      var value = new proto.sf.antelope.type.v1.RAMOp;
      reader.readMessage(value,proto.sf.antelope.type.v1.RAMOp.deserializeBinaryFromReader);
      msg.addRamOps(value);
      break;
    case 22:
      var value = new proto.sf.antelope.type.v1.RAMCorrectionOp;
      reader.readMessage(value,proto.sf.antelope.type.v1.RAMCorrectionOp.deserializeBinaryFromReader);
      msg.addRamCorrectionOps(value);
      break;
    case 23:
      var value = new proto.sf.antelope.type.v1.RlimitOp;
      reader.readMessage(value,proto.sf.antelope.type.v1.RlimitOp.deserializeBinaryFromReader);
      msg.addRlimitOps(value);
      break;
    case 24:
      var value = new proto.sf.antelope.type.v1.TableOp;
      reader.readMessage(value,proto.sf.antelope.type.v1.TableOp.deserializeBinaryFromReader);
      msg.addTableOps(value);
      break;
    case 25:
      var value = new proto.sf.antelope.type.v1.CreationFlatNode;
      reader.readMessage(value,proto.sf.antelope.type.v1.CreationFlatNode.deserializeBinaryFromReader);
      msg.addCreationTree(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.TransactionTrace.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.TransactionTrace} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.TransactionTrace.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlockNum();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      2,
      f
    );
  }
  f = message.getIndex();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      26,
      f
    );
  }
  f = message.getBlockTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getProducerBlockId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getReceipt();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.sf.antelope.type.v1.TransactionReceiptHeader.serializeBinaryToWriter
    );
  }
  f = message.getElapsed();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getNetUsage();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      7,
      f
    );
  }
  f = message.getScheduled();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getActionTracesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.sf.antelope.type.v1.ActionTrace.serializeBinaryToWriter
    );
  }
  f = message.getFailedDtrxTrace();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.sf.antelope.type.v1.TransactionTrace.serializeBinaryToWriter
    );
  }
  f = message.getException();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.sf.antelope.type.v1.Exception.serializeBinaryToWriter
    );
  }
  f = message.getErrorCode();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      16,
      f
    );
  }
  f = message.getDbOpsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      17,
      f,
      proto.sf.antelope.type.v1.DBOp.serializeBinaryToWriter
    );
  }
  f = message.getDtrxOpsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      18,
      f,
      proto.sf.antelope.type.v1.DTrxOp.serializeBinaryToWriter
    );
  }
  f = message.getFeatureOpsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      19,
      f,
      proto.sf.antelope.type.v1.FeatureOp.serializeBinaryToWriter
    );
  }
  f = message.getPermOpsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      20,
      f,
      proto.sf.antelope.type.v1.PermOp.serializeBinaryToWriter
    );
  }
  f = message.getRamOpsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      21,
      f,
      proto.sf.antelope.type.v1.RAMOp.serializeBinaryToWriter
    );
  }
  f = message.getRamCorrectionOpsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      22,
      f,
      proto.sf.antelope.type.v1.RAMCorrectionOp.serializeBinaryToWriter
    );
  }
  f = message.getRlimitOpsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      23,
      f,
      proto.sf.antelope.type.v1.RlimitOp.serializeBinaryToWriter
    );
  }
  f = message.getTableOpsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      24,
      f,
      proto.sf.antelope.type.v1.TableOp.serializeBinaryToWriter
    );
  }
  f = message.getCreationTreeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      25,
      f,
      proto.sf.antelope.type.v1.CreationFlatNode.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.TransactionTrace} returns this
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 block_num = 2;
 * @return {string}
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.getBlockNum = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.TransactionTrace} returns this
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.setBlockNum = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional uint64 index = 26;
 * @return {string}
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.getIndex = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 26, "0"));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.TransactionTrace} returns this
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.setIndex = function(value) {
  return jspb.Message.setProto3StringIntField(this, 26, value);
};


/**
 * optional google.protobuf.Timestamp block_time = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.getBlockTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.sf.antelope.type.v1.TransactionTrace} returns this
*/
proto.sf.antelope.type.v1.TransactionTrace.prototype.setBlockTime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.TransactionTrace} returns this
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.clearBlockTime = function() {
  return this.setBlockTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.hasBlockTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string producer_block_id = 4;
 * @return {string}
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.getProducerBlockId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.TransactionTrace} returns this
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.setProducerBlockId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional TransactionReceiptHeader receipt = 5;
 * @return {?proto.sf.antelope.type.v1.TransactionReceiptHeader}
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.getReceipt = function() {
  return /** @type{?proto.sf.antelope.type.v1.TransactionReceiptHeader} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.TransactionReceiptHeader, 5));
};


/**
 * @param {?proto.sf.antelope.type.v1.TransactionReceiptHeader|undefined} value
 * @return {!proto.sf.antelope.type.v1.TransactionTrace} returns this
*/
proto.sf.antelope.type.v1.TransactionTrace.prototype.setReceipt = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.TransactionTrace} returns this
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.clearReceipt = function() {
  return this.setReceipt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.hasReceipt = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int64 elapsed = 6;
 * @return {number}
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.getElapsed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.TransactionTrace} returns this
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.setElapsed = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint64 net_usage = 7;
 * @return {string}
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.getNetUsage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, "0"));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.TransactionTrace} returns this
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.setNetUsage = function(value) {
  return jspb.Message.setProto3StringIntField(this, 7, value);
};


/**
 * optional bool scheduled = 8;
 * @return {boolean}
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.getScheduled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sf.antelope.type.v1.TransactionTrace} returns this
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.setScheduled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * repeated ActionTrace action_traces = 9;
 * @return {!Array<!proto.sf.antelope.type.v1.ActionTrace>}
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.getActionTracesList = function() {
  return /** @type{!Array<!proto.sf.antelope.type.v1.ActionTrace>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sf.antelope.type.v1.ActionTrace, 9));
};


/**
 * @param {!Array<!proto.sf.antelope.type.v1.ActionTrace>} value
 * @return {!proto.sf.antelope.type.v1.TransactionTrace} returns this
*/
proto.sf.antelope.type.v1.TransactionTrace.prototype.setActionTracesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.sf.antelope.type.v1.ActionTrace=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.ActionTrace}
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.addActionTraces = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.sf.antelope.type.v1.ActionTrace, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.TransactionTrace} returns this
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.clearActionTracesList = function() {
  return this.setActionTracesList([]);
};


/**
 * optional TransactionTrace failed_dtrx_trace = 10;
 * @return {?proto.sf.antelope.type.v1.TransactionTrace}
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.getFailedDtrxTrace = function() {
  return /** @type{?proto.sf.antelope.type.v1.TransactionTrace} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.TransactionTrace, 10));
};


/**
 * @param {?proto.sf.antelope.type.v1.TransactionTrace|undefined} value
 * @return {!proto.sf.antelope.type.v1.TransactionTrace} returns this
*/
proto.sf.antelope.type.v1.TransactionTrace.prototype.setFailedDtrxTrace = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.TransactionTrace} returns this
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.clearFailedDtrxTrace = function() {
  return this.setFailedDtrxTrace(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.hasFailedDtrxTrace = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Exception exception = 15;
 * @return {?proto.sf.antelope.type.v1.Exception}
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.getException = function() {
  return /** @type{?proto.sf.antelope.type.v1.Exception} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.Exception, 15));
};


/**
 * @param {?proto.sf.antelope.type.v1.Exception|undefined} value
 * @return {!proto.sf.antelope.type.v1.TransactionTrace} returns this
*/
proto.sf.antelope.type.v1.TransactionTrace.prototype.setException = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.TransactionTrace} returns this
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.clearException = function() {
  return this.setException(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.hasException = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional uint64 error_code = 16;
 * @return {string}
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.getErrorCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, "0"));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.TransactionTrace} returns this
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.setErrorCode = function(value) {
  return jspb.Message.setProto3StringIntField(this, 16, value);
};


/**
 * repeated DBOp db_ops = 17;
 * @return {!Array<!proto.sf.antelope.type.v1.DBOp>}
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.getDbOpsList = function() {
  return /** @type{!Array<!proto.sf.antelope.type.v1.DBOp>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sf.antelope.type.v1.DBOp, 17));
};


/**
 * @param {!Array<!proto.sf.antelope.type.v1.DBOp>} value
 * @return {!proto.sf.antelope.type.v1.TransactionTrace} returns this
*/
proto.sf.antelope.type.v1.TransactionTrace.prototype.setDbOpsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 17, value);
};


/**
 * @param {!proto.sf.antelope.type.v1.DBOp=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.DBOp}
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.addDbOps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 17, opt_value, proto.sf.antelope.type.v1.DBOp, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.TransactionTrace} returns this
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.clearDbOpsList = function() {
  return this.setDbOpsList([]);
};


/**
 * repeated DTrxOp dtrx_ops = 18;
 * @return {!Array<!proto.sf.antelope.type.v1.DTrxOp>}
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.getDtrxOpsList = function() {
  return /** @type{!Array<!proto.sf.antelope.type.v1.DTrxOp>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sf.antelope.type.v1.DTrxOp, 18));
};


/**
 * @param {!Array<!proto.sf.antelope.type.v1.DTrxOp>} value
 * @return {!proto.sf.antelope.type.v1.TransactionTrace} returns this
*/
proto.sf.antelope.type.v1.TransactionTrace.prototype.setDtrxOpsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 18, value);
};


/**
 * @param {!proto.sf.antelope.type.v1.DTrxOp=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.DTrxOp}
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.addDtrxOps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 18, opt_value, proto.sf.antelope.type.v1.DTrxOp, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.TransactionTrace} returns this
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.clearDtrxOpsList = function() {
  return this.setDtrxOpsList([]);
};


/**
 * repeated FeatureOp feature_ops = 19;
 * @return {!Array<!proto.sf.antelope.type.v1.FeatureOp>}
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.getFeatureOpsList = function() {
  return /** @type{!Array<!proto.sf.antelope.type.v1.FeatureOp>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sf.antelope.type.v1.FeatureOp, 19));
};


/**
 * @param {!Array<!proto.sf.antelope.type.v1.FeatureOp>} value
 * @return {!proto.sf.antelope.type.v1.TransactionTrace} returns this
*/
proto.sf.antelope.type.v1.TransactionTrace.prototype.setFeatureOpsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 19, value);
};


/**
 * @param {!proto.sf.antelope.type.v1.FeatureOp=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.FeatureOp}
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.addFeatureOps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 19, opt_value, proto.sf.antelope.type.v1.FeatureOp, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.TransactionTrace} returns this
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.clearFeatureOpsList = function() {
  return this.setFeatureOpsList([]);
};


/**
 * repeated PermOp perm_ops = 20;
 * @return {!Array<!proto.sf.antelope.type.v1.PermOp>}
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.getPermOpsList = function() {
  return /** @type{!Array<!proto.sf.antelope.type.v1.PermOp>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sf.antelope.type.v1.PermOp, 20));
};


/**
 * @param {!Array<!proto.sf.antelope.type.v1.PermOp>} value
 * @return {!proto.sf.antelope.type.v1.TransactionTrace} returns this
*/
proto.sf.antelope.type.v1.TransactionTrace.prototype.setPermOpsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 20, value);
};


/**
 * @param {!proto.sf.antelope.type.v1.PermOp=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.PermOp}
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.addPermOps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 20, opt_value, proto.sf.antelope.type.v1.PermOp, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.TransactionTrace} returns this
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.clearPermOpsList = function() {
  return this.setPermOpsList([]);
};


/**
 * repeated RAMOp ram_ops = 21;
 * @return {!Array<!proto.sf.antelope.type.v1.RAMOp>}
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.getRamOpsList = function() {
  return /** @type{!Array<!proto.sf.antelope.type.v1.RAMOp>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sf.antelope.type.v1.RAMOp, 21));
};


/**
 * @param {!Array<!proto.sf.antelope.type.v1.RAMOp>} value
 * @return {!proto.sf.antelope.type.v1.TransactionTrace} returns this
*/
proto.sf.antelope.type.v1.TransactionTrace.prototype.setRamOpsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 21, value);
};


/**
 * @param {!proto.sf.antelope.type.v1.RAMOp=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.RAMOp}
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.addRamOps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 21, opt_value, proto.sf.antelope.type.v1.RAMOp, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.TransactionTrace} returns this
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.clearRamOpsList = function() {
  return this.setRamOpsList([]);
};


/**
 * repeated RAMCorrectionOp ram_correction_ops = 22;
 * @return {!Array<!proto.sf.antelope.type.v1.RAMCorrectionOp>}
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.getRamCorrectionOpsList = function() {
  return /** @type{!Array<!proto.sf.antelope.type.v1.RAMCorrectionOp>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sf.antelope.type.v1.RAMCorrectionOp, 22));
};


/**
 * @param {!Array<!proto.sf.antelope.type.v1.RAMCorrectionOp>} value
 * @return {!proto.sf.antelope.type.v1.TransactionTrace} returns this
*/
proto.sf.antelope.type.v1.TransactionTrace.prototype.setRamCorrectionOpsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 22, value);
};


/**
 * @param {!proto.sf.antelope.type.v1.RAMCorrectionOp=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.RAMCorrectionOp}
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.addRamCorrectionOps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 22, opt_value, proto.sf.antelope.type.v1.RAMCorrectionOp, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.TransactionTrace} returns this
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.clearRamCorrectionOpsList = function() {
  return this.setRamCorrectionOpsList([]);
};


/**
 * repeated RlimitOp rlimit_ops = 23;
 * @return {!Array<!proto.sf.antelope.type.v1.RlimitOp>}
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.getRlimitOpsList = function() {
  return /** @type{!Array<!proto.sf.antelope.type.v1.RlimitOp>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sf.antelope.type.v1.RlimitOp, 23));
};


/**
 * @param {!Array<!proto.sf.antelope.type.v1.RlimitOp>} value
 * @return {!proto.sf.antelope.type.v1.TransactionTrace} returns this
*/
proto.sf.antelope.type.v1.TransactionTrace.prototype.setRlimitOpsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 23, value);
};


/**
 * @param {!proto.sf.antelope.type.v1.RlimitOp=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.RlimitOp}
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.addRlimitOps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 23, opt_value, proto.sf.antelope.type.v1.RlimitOp, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.TransactionTrace} returns this
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.clearRlimitOpsList = function() {
  return this.setRlimitOpsList([]);
};


/**
 * repeated TableOp table_ops = 24;
 * @return {!Array<!proto.sf.antelope.type.v1.TableOp>}
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.getTableOpsList = function() {
  return /** @type{!Array<!proto.sf.antelope.type.v1.TableOp>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sf.antelope.type.v1.TableOp, 24));
};


/**
 * @param {!Array<!proto.sf.antelope.type.v1.TableOp>} value
 * @return {!proto.sf.antelope.type.v1.TransactionTrace} returns this
*/
proto.sf.antelope.type.v1.TransactionTrace.prototype.setTableOpsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 24, value);
};


/**
 * @param {!proto.sf.antelope.type.v1.TableOp=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.TableOp}
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.addTableOps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 24, opt_value, proto.sf.antelope.type.v1.TableOp, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.TransactionTrace} returns this
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.clearTableOpsList = function() {
  return this.setTableOpsList([]);
};


/**
 * repeated CreationFlatNode creation_tree = 25;
 * @return {!Array<!proto.sf.antelope.type.v1.CreationFlatNode>}
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.getCreationTreeList = function() {
  return /** @type{!Array<!proto.sf.antelope.type.v1.CreationFlatNode>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sf.antelope.type.v1.CreationFlatNode, 25));
};


/**
 * @param {!Array<!proto.sf.antelope.type.v1.CreationFlatNode>} value
 * @return {!proto.sf.antelope.type.v1.TransactionTrace} returns this
*/
proto.sf.antelope.type.v1.TransactionTrace.prototype.setCreationTreeList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 25, value);
};


/**
 * @param {!proto.sf.antelope.type.v1.CreationFlatNode=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.CreationFlatNode}
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.addCreationTree = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 25, opt_value, proto.sf.antelope.type.v1.CreationFlatNode, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.TransactionTrace} returns this
 */
proto.sf.antelope.type.v1.TransactionTrace.prototype.clearCreationTreeList = function() {
  return this.setCreationTreeList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.TransactionReceiptHeader.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.TransactionReceiptHeader.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.TransactionReceiptHeader} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.TransactionReceiptHeader.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    cpuUsageMicroSeconds: jspb.Message.getFieldWithDefault(msg, 2, 0),
    netUsageWords: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.TransactionReceiptHeader}
 */
proto.sf.antelope.type.v1.TransactionReceiptHeader.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.TransactionReceiptHeader;
  return proto.sf.antelope.type.v1.TransactionReceiptHeader.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.TransactionReceiptHeader} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.TransactionReceiptHeader}
 */
proto.sf.antelope.type.v1.TransactionReceiptHeader.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.sf.antelope.type.v1.TransactionStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCpuUsageMicroSeconds(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNetUsageWords(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.TransactionReceiptHeader.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.TransactionReceiptHeader.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.TransactionReceiptHeader} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.TransactionReceiptHeader.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getCpuUsageMicroSeconds();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getNetUsageWords();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional TransactionStatus status = 1;
 * @return {!proto.sf.antelope.type.v1.TransactionStatus}
 */
proto.sf.antelope.type.v1.TransactionReceiptHeader.prototype.getStatus = function() {
  return /** @type {!proto.sf.antelope.type.v1.TransactionStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.sf.antelope.type.v1.TransactionStatus} value
 * @return {!proto.sf.antelope.type.v1.TransactionReceiptHeader} returns this
 */
proto.sf.antelope.type.v1.TransactionReceiptHeader.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional uint32 cpu_usage_micro_seconds = 2;
 * @return {number}
 */
proto.sf.antelope.type.v1.TransactionReceiptHeader.prototype.getCpuUsageMicroSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.TransactionReceiptHeader} returns this
 */
proto.sf.antelope.type.v1.TransactionReceiptHeader.prototype.setCpuUsageMicroSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 net_usage_words = 3;
 * @return {number}
 */
proto.sf.antelope.type.v1.TransactionReceiptHeader.prototype.getNetUsageWords = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.TransactionReceiptHeader} returns this
 */
proto.sf.antelope.type.v1.TransactionReceiptHeader.prototype.setNetUsageWords = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sf.antelope.type.v1.Action.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.Action.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.Action.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.Action} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.Action.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    authorizationList: jspb.Message.toObjectList(msg.getAuthorizationList(),
    proto.sf.antelope.type.v1.PermissionLevel.toObject, includeInstance),
    jsonData: jspb.Message.getFieldWithDefault(msg, 4, ""),
    rawData: msg.getRawData_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.Action}
 */
proto.sf.antelope.type.v1.Action.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.Action;
  return proto.sf.antelope.type.v1.Action.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.Action} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.Action}
 */
proto.sf.antelope.type.v1.Action.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new proto.sf.antelope.type.v1.PermissionLevel;
      reader.readMessage(value,proto.sf.antelope.type.v1.PermissionLevel.deserializeBinaryFromReader);
      msg.addAuthorization(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setJsonData(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRawData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.Action.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.Action.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.Action} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.Action.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAuthorizationList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.sf.antelope.type.v1.PermissionLevel.serializeBinaryToWriter
    );
  }
  f = message.getJsonData();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRawData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
};


/**
 * optional string account = 1;
 * @return {string}
 */
proto.sf.antelope.type.v1.Action.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.Action} returns this
 */
proto.sf.antelope.type.v1.Action.prototype.setAccount = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.sf.antelope.type.v1.Action.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.Action} returns this
 */
proto.sf.antelope.type.v1.Action.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated PermissionLevel authorization = 3;
 * @return {!Array<!proto.sf.antelope.type.v1.PermissionLevel>}
 */
proto.sf.antelope.type.v1.Action.prototype.getAuthorizationList = function() {
  return /** @type{!Array<!proto.sf.antelope.type.v1.PermissionLevel>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sf.antelope.type.v1.PermissionLevel, 3));
};


/**
 * @param {!Array<!proto.sf.antelope.type.v1.PermissionLevel>} value
 * @return {!proto.sf.antelope.type.v1.Action} returns this
*/
proto.sf.antelope.type.v1.Action.prototype.setAuthorizationList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.sf.antelope.type.v1.PermissionLevel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.PermissionLevel}
 */
proto.sf.antelope.type.v1.Action.prototype.addAuthorization = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.sf.antelope.type.v1.PermissionLevel, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.Action} returns this
 */
proto.sf.antelope.type.v1.Action.prototype.clearAuthorizationList = function() {
  return this.setAuthorizationList([]);
};


/**
 * optional string json_data = 4;
 * @return {string}
 */
proto.sf.antelope.type.v1.Action.prototype.getJsonData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.Action} returns this
 */
proto.sf.antelope.type.v1.Action.prototype.setJsonData = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bytes raw_data = 5;
 * @return {!(string|Uint8Array)}
 */
proto.sf.antelope.type.v1.Action.prototype.getRawData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes raw_data = 5;
 * This is a type-conversion wrapper around `getRawData()`
 * @return {string}
 */
proto.sf.antelope.type.v1.Action.prototype.getRawData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRawData()));
};


/**
 * optional bytes raw_data = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRawData()`
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.Action.prototype.getRawData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRawData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sf.antelope.type.v1.Action} returns this
 */
proto.sf.antelope.type.v1.Action.prototype.setRawData = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sf.antelope.type.v1.ActionTrace.repeatedFields_ = [10];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.ActionTrace.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.ActionTrace} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.ActionTrace.toObject = function(includeInstance, msg) {
  var f, obj = {
    receiver: jspb.Message.getFieldWithDefault(msg, 11, ""),
    receipt: (f = msg.getReceipt()) && proto.sf.antelope.type.v1.ActionReceipt.toObject(includeInstance, f),
    action: (f = msg.getAction()) && proto.sf.antelope.type.v1.Action.toObject(includeInstance, f),
    contextFree: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    elapsed: jspb.Message.getFieldWithDefault(msg, 4, 0),
    console: jspb.Message.getFieldWithDefault(msg, 5, ""),
    transactionId: jspb.Message.getFieldWithDefault(msg, 6, ""),
    blockNum: jspb.Message.getFieldWithDefault(msg, 7, "0"),
    producerBlockId: jspb.Message.getFieldWithDefault(msg, 8, ""),
    blockTime: (f = msg.getBlockTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    accountRamDeltasList: jspb.Message.toObjectList(msg.getAccountRamDeltasList(),
    proto.sf.antelope.type.v1.AccountRAMDelta.toObject, includeInstance),
    rawReturnValue: msg.getRawReturnValue_asB64(),
    jsonReturnValue: jspb.Message.getFieldWithDefault(msg, 42, ""),
    exception: (f = msg.getException()) && proto.sf.antelope.type.v1.Exception.toObject(includeInstance, f),
    errorCode: jspb.Message.getFieldWithDefault(msg, 20, "0"),
    actionOrdinal: jspb.Message.getFieldWithDefault(msg, 16, 0),
    creatorActionOrdinal: jspb.Message.getFieldWithDefault(msg, 17, 0),
    closestUnnotifiedAncestorActionOrdinal: jspb.Message.getFieldWithDefault(msg, 18, 0),
    executionIndex: jspb.Message.getFieldWithDefault(msg, 19, 0),
    filteringMatched: jspb.Message.getBooleanFieldWithDefault(msg, 30, false),
    filteringMatchedSystemActionFilter: jspb.Message.getBooleanFieldWithDefault(msg, 31, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.ActionTrace}
 */
proto.sf.antelope.type.v1.ActionTrace.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.ActionTrace;
  return proto.sf.antelope.type.v1.ActionTrace.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.ActionTrace} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.ActionTrace}
 */
proto.sf.antelope.type.v1.ActionTrace.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setReceiver(value);
      break;
    case 1:
      var value = new proto.sf.antelope.type.v1.ActionReceipt;
      reader.readMessage(value,proto.sf.antelope.type.v1.ActionReceipt.deserializeBinaryFromReader);
      msg.setReceipt(value);
      break;
    case 2:
      var value = new proto.sf.antelope.type.v1.Action;
      reader.readMessage(value,proto.sf.antelope.type.v1.Action.deserializeBinaryFromReader);
      msg.setAction(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setContextFree(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setElapsed(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setConsole(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactionId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setBlockNum(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setProducerBlockId(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setBlockTime(value);
      break;
    case 10:
      var value = new proto.sf.antelope.type.v1.AccountRAMDelta;
      reader.readMessage(value,proto.sf.antelope.type.v1.AccountRAMDelta.deserializeBinaryFromReader);
      msg.addAccountRamDeltas(value);
      break;
    case 41:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRawReturnValue(value);
      break;
    case 42:
      var value = /** @type {string} */ (reader.readString());
      msg.setJsonReturnValue(value);
      break;
    case 15:
      var value = new proto.sf.antelope.type.v1.Exception;
      reader.readMessage(value,proto.sf.antelope.type.v1.Exception.deserializeBinaryFromReader);
      msg.setException(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setErrorCode(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setActionOrdinal(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCreatorActionOrdinal(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setClosestUnnotifiedAncestorActionOrdinal(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setExecutionIndex(value);
      break;
    case 30:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFilteringMatched(value);
      break;
    case 31:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFilteringMatchedSystemActionFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.ActionTrace.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.ActionTrace} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.ActionTrace.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReceiver();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getReceipt();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sf.antelope.type.v1.ActionReceipt.serializeBinaryToWriter
    );
  }
  f = message.getAction();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sf.antelope.type.v1.Action.serializeBinaryToWriter
    );
  }
  f = message.getContextFree();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getElapsed();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getConsole();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTransactionId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getBlockNum();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      7,
      f
    );
  }
  f = message.getProducerBlockId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getBlockTime();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getAccountRamDeltasList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.sf.antelope.type.v1.AccountRAMDelta.serializeBinaryToWriter
    );
  }
  f = message.getRawReturnValue_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      41,
      f
    );
  }
  f = message.getJsonReturnValue();
  if (f.length > 0) {
    writer.writeString(
      42,
      f
    );
  }
  f = message.getException();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.sf.antelope.type.v1.Exception.serializeBinaryToWriter
    );
  }
  f = message.getErrorCode();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      20,
      f
    );
  }
  f = message.getActionOrdinal();
  if (f !== 0) {
    writer.writeUint32(
      16,
      f
    );
  }
  f = message.getCreatorActionOrdinal();
  if (f !== 0) {
    writer.writeUint32(
      17,
      f
    );
  }
  f = message.getClosestUnnotifiedAncestorActionOrdinal();
  if (f !== 0) {
    writer.writeUint32(
      18,
      f
    );
  }
  f = message.getExecutionIndex();
  if (f !== 0) {
    writer.writeUint32(
      19,
      f
    );
  }
  f = message.getFilteringMatched();
  if (f) {
    writer.writeBool(
      30,
      f
    );
  }
  f = message.getFilteringMatchedSystemActionFilter();
  if (f) {
    writer.writeBool(
      31,
      f
    );
  }
};


/**
 * optional string receiver = 11;
 * @return {string}
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.getReceiver = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.ActionTrace} returns this
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.setReceiver = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional ActionReceipt receipt = 1;
 * @return {?proto.sf.antelope.type.v1.ActionReceipt}
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.getReceipt = function() {
  return /** @type{?proto.sf.antelope.type.v1.ActionReceipt} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.ActionReceipt, 1));
};


/**
 * @param {?proto.sf.antelope.type.v1.ActionReceipt|undefined} value
 * @return {!proto.sf.antelope.type.v1.ActionTrace} returns this
*/
proto.sf.antelope.type.v1.ActionTrace.prototype.setReceipt = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.ActionTrace} returns this
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.clearReceipt = function() {
  return this.setReceipt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.hasReceipt = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Action action = 2;
 * @return {?proto.sf.antelope.type.v1.Action}
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.getAction = function() {
  return /** @type{?proto.sf.antelope.type.v1.Action} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.Action, 2));
};


/**
 * @param {?proto.sf.antelope.type.v1.Action|undefined} value
 * @return {!proto.sf.antelope.type.v1.ActionTrace} returns this
*/
proto.sf.antelope.type.v1.ActionTrace.prototype.setAction = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.ActionTrace} returns this
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.clearAction = function() {
  return this.setAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.hasAction = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool context_free = 3;
 * @return {boolean}
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.getContextFree = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sf.antelope.type.v1.ActionTrace} returns this
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.setContextFree = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional int64 elapsed = 4;
 * @return {number}
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.getElapsed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.ActionTrace} returns this
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.setElapsed = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string console = 5;
 * @return {string}
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.getConsole = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.ActionTrace} returns this
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.setConsole = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string transaction_id = 6;
 * @return {string}
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.ActionTrace} returns this
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.setTransactionId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional uint64 block_num = 7;
 * @return {string}
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.getBlockNum = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, "0"));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.ActionTrace} returns this
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.setBlockNum = function(value) {
  return jspb.Message.setProto3StringIntField(this, 7, value);
};


/**
 * optional string producer_block_id = 8;
 * @return {string}
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.getProducerBlockId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.ActionTrace} returns this
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.setProducerBlockId = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional google.protobuf.Timestamp block_time = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.getBlockTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.sf.antelope.type.v1.ActionTrace} returns this
*/
proto.sf.antelope.type.v1.ActionTrace.prototype.setBlockTime = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.ActionTrace} returns this
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.clearBlockTime = function() {
  return this.setBlockTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.hasBlockTime = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * repeated AccountRAMDelta account_ram_deltas = 10;
 * @return {!Array<!proto.sf.antelope.type.v1.AccountRAMDelta>}
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.getAccountRamDeltasList = function() {
  return /** @type{!Array<!proto.sf.antelope.type.v1.AccountRAMDelta>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sf.antelope.type.v1.AccountRAMDelta, 10));
};


/**
 * @param {!Array<!proto.sf.antelope.type.v1.AccountRAMDelta>} value
 * @return {!proto.sf.antelope.type.v1.ActionTrace} returns this
*/
proto.sf.antelope.type.v1.ActionTrace.prototype.setAccountRamDeltasList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.sf.antelope.type.v1.AccountRAMDelta=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.AccountRAMDelta}
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.addAccountRamDeltas = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.sf.antelope.type.v1.AccountRAMDelta, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.ActionTrace} returns this
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.clearAccountRamDeltasList = function() {
  return this.setAccountRamDeltasList([]);
};


/**
 * optional bytes raw_return_value = 41;
 * @return {!(string|Uint8Array)}
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.getRawReturnValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 41, ""));
};


/**
 * optional bytes raw_return_value = 41;
 * This is a type-conversion wrapper around `getRawReturnValue()`
 * @return {string}
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.getRawReturnValue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRawReturnValue()));
};


/**
 * optional bytes raw_return_value = 41;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRawReturnValue()`
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.getRawReturnValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRawReturnValue()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sf.antelope.type.v1.ActionTrace} returns this
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.setRawReturnValue = function(value) {
  return jspb.Message.setProto3BytesField(this, 41, value);
};


/**
 * optional string json_return_value = 42;
 * @return {string}
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.getJsonReturnValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 42, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.ActionTrace} returns this
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.setJsonReturnValue = function(value) {
  return jspb.Message.setProto3StringField(this, 42, value);
};


/**
 * optional Exception exception = 15;
 * @return {?proto.sf.antelope.type.v1.Exception}
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.getException = function() {
  return /** @type{?proto.sf.antelope.type.v1.Exception} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.Exception, 15));
};


/**
 * @param {?proto.sf.antelope.type.v1.Exception|undefined} value
 * @return {!proto.sf.antelope.type.v1.ActionTrace} returns this
*/
proto.sf.antelope.type.v1.ActionTrace.prototype.setException = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.ActionTrace} returns this
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.clearException = function() {
  return this.setException(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.hasException = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional uint64 error_code = 20;
 * @return {string}
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.getErrorCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, "0"));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.ActionTrace} returns this
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.setErrorCode = function(value) {
  return jspb.Message.setProto3StringIntField(this, 20, value);
};


/**
 * optional uint32 action_ordinal = 16;
 * @return {number}
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.getActionOrdinal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.ActionTrace} returns this
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.setActionOrdinal = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional uint32 creator_action_ordinal = 17;
 * @return {number}
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.getCreatorActionOrdinal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.ActionTrace} returns this
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.setCreatorActionOrdinal = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};


/**
 * optional uint32 closest_unnotified_ancestor_action_ordinal = 18;
 * @return {number}
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.getClosestUnnotifiedAncestorActionOrdinal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.ActionTrace} returns this
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.setClosestUnnotifiedAncestorActionOrdinal = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * optional uint32 execution_index = 19;
 * @return {number}
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.getExecutionIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.ActionTrace} returns this
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.setExecutionIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * optional bool filtering_matched = 30;
 * @return {boolean}
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.getFilteringMatched = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 30, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sf.antelope.type.v1.ActionTrace} returns this
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.setFilteringMatched = function(value) {
  return jspb.Message.setProto3BooleanField(this, 30, value);
};


/**
 * optional bool filtering_matched_system_action_filter = 31;
 * @return {boolean}
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.getFilteringMatchedSystemActionFilter = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 31, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sf.antelope.type.v1.ActionTrace} returns this
 */
proto.sf.antelope.type.v1.ActionTrace.prototype.setFilteringMatchedSystemActionFilter = function(value) {
  return jspb.Message.setProto3BooleanField(this, 31, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sf.antelope.type.v1.ActionReceipt.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.ActionReceipt.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.ActionReceipt.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.ActionReceipt} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.ActionReceipt.toObject = function(includeInstance, msg) {
  var f, obj = {
    receiver: jspb.Message.getFieldWithDefault(msg, 1, ""),
    digest: jspb.Message.getFieldWithDefault(msg, 2, ""),
    globalSequence: jspb.Message.getFieldWithDefault(msg, 3, "0"),
    authSequenceList: jspb.Message.toObjectList(msg.getAuthSequenceList(),
    proto.sf.antelope.type.v1.AuthSequence.toObject, includeInstance),
    recvSequence: jspb.Message.getFieldWithDefault(msg, 5, "0"),
    codeSequence: jspb.Message.getFieldWithDefault(msg, 6, "0"),
    abiSequence: jspb.Message.getFieldWithDefault(msg, 7, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.ActionReceipt}
 */
proto.sf.antelope.type.v1.ActionReceipt.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.ActionReceipt;
  return proto.sf.antelope.type.v1.ActionReceipt.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.ActionReceipt} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.ActionReceipt}
 */
proto.sf.antelope.type.v1.ActionReceipt.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReceiver(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDigest(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setGlobalSequence(value);
      break;
    case 4:
      var value = new proto.sf.antelope.type.v1.AuthSequence;
      reader.readMessage(value,proto.sf.antelope.type.v1.AuthSequence.deserializeBinaryFromReader);
      msg.addAuthSequence(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setRecvSequence(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setCodeSequence(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setAbiSequence(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.ActionReceipt.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.ActionReceipt.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.ActionReceipt} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.ActionReceipt.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReceiver();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDigest();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getGlobalSequence();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      3,
      f
    );
  }
  f = message.getAuthSequenceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.sf.antelope.type.v1.AuthSequence.serializeBinaryToWriter
    );
  }
  f = message.getRecvSequence();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      5,
      f
    );
  }
  f = message.getCodeSequence();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      6,
      f
    );
  }
  f = message.getAbiSequence();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      7,
      f
    );
  }
};


/**
 * optional string receiver = 1;
 * @return {string}
 */
proto.sf.antelope.type.v1.ActionReceipt.prototype.getReceiver = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.ActionReceipt} returns this
 */
proto.sf.antelope.type.v1.ActionReceipt.prototype.setReceiver = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string digest = 2;
 * @return {string}
 */
proto.sf.antelope.type.v1.ActionReceipt.prototype.getDigest = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.ActionReceipt} returns this
 */
proto.sf.antelope.type.v1.ActionReceipt.prototype.setDigest = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 global_sequence = 3;
 * @return {string}
 */
proto.sf.antelope.type.v1.ActionReceipt.prototype.getGlobalSequence = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, "0"));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.ActionReceipt} returns this
 */
proto.sf.antelope.type.v1.ActionReceipt.prototype.setGlobalSequence = function(value) {
  return jspb.Message.setProto3StringIntField(this, 3, value);
};


/**
 * repeated AuthSequence auth_sequence = 4;
 * @return {!Array<!proto.sf.antelope.type.v1.AuthSequence>}
 */
proto.sf.antelope.type.v1.ActionReceipt.prototype.getAuthSequenceList = function() {
  return /** @type{!Array<!proto.sf.antelope.type.v1.AuthSequence>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sf.antelope.type.v1.AuthSequence, 4));
};


/**
 * @param {!Array<!proto.sf.antelope.type.v1.AuthSequence>} value
 * @return {!proto.sf.antelope.type.v1.ActionReceipt} returns this
*/
proto.sf.antelope.type.v1.ActionReceipt.prototype.setAuthSequenceList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.sf.antelope.type.v1.AuthSequence=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.AuthSequence}
 */
proto.sf.antelope.type.v1.ActionReceipt.prototype.addAuthSequence = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.sf.antelope.type.v1.AuthSequence, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.ActionReceipt} returns this
 */
proto.sf.antelope.type.v1.ActionReceipt.prototype.clearAuthSequenceList = function() {
  return this.setAuthSequenceList([]);
};


/**
 * optional uint64 recv_sequence = 5;
 * @return {string}
 */
proto.sf.antelope.type.v1.ActionReceipt.prototype.getRecvSequence = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, "0"));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.ActionReceipt} returns this
 */
proto.sf.antelope.type.v1.ActionReceipt.prototype.setRecvSequence = function(value) {
  return jspb.Message.setProto3StringIntField(this, 5, value);
};


/**
 * optional uint64 code_sequence = 6;
 * @return {string}
 */
proto.sf.antelope.type.v1.ActionReceipt.prototype.getCodeSequence = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, "0"));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.ActionReceipt} returns this
 */
proto.sf.antelope.type.v1.ActionReceipt.prototype.setCodeSequence = function(value) {
  return jspb.Message.setProto3StringIntField(this, 6, value);
};


/**
 * optional uint64 abi_sequence = 7;
 * @return {string}
 */
proto.sf.antelope.type.v1.ActionReceipt.prototype.getAbiSequence = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, "0"));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.ActionReceipt} returns this
 */
proto.sf.antelope.type.v1.ActionReceipt.prototype.setAbiSequence = function(value) {
  return jspb.Message.setProto3StringIntField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.AuthSequence.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.AuthSequence.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.AuthSequence} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.AuthSequence.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sequence: jspb.Message.getFieldWithDefault(msg, 2, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.AuthSequence}
 */
proto.sf.antelope.type.v1.AuthSequence.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.AuthSequence;
  return proto.sf.antelope.type.v1.AuthSequence.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.AuthSequence} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.AuthSequence}
 */
proto.sf.antelope.type.v1.AuthSequence.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setSequence(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.AuthSequence.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.AuthSequence.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.AuthSequence} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.AuthSequence.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSequence();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      2,
      f
    );
  }
};


/**
 * optional string account_name = 1;
 * @return {string}
 */
proto.sf.antelope.type.v1.AuthSequence.prototype.getAccountName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.AuthSequence} returns this
 */
proto.sf.antelope.type.v1.AuthSequence.prototype.setAccountName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 sequence = 2;
 * @return {string}
 */
proto.sf.antelope.type.v1.AuthSequence.prototype.getSequence = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.AuthSequence} returns this
 */
proto.sf.antelope.type.v1.AuthSequence.prototype.setSequence = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.AccountRAMDelta.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.AccountRAMDelta.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.AccountRAMDelta} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.AccountRAMDelta.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, ""),
    delta: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.AccountRAMDelta}
 */
proto.sf.antelope.type.v1.AccountRAMDelta.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.AccountRAMDelta;
  return proto.sf.antelope.type.v1.AccountRAMDelta.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.AccountRAMDelta} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.AccountRAMDelta}
 */
proto.sf.antelope.type.v1.AccountRAMDelta.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDelta(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.AccountRAMDelta.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.AccountRAMDelta.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.AccountRAMDelta} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.AccountRAMDelta.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDelta();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string account = 1;
 * @return {string}
 */
proto.sf.antelope.type.v1.AccountRAMDelta.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.AccountRAMDelta} returns this
 */
proto.sf.antelope.type.v1.AccountRAMDelta.prototype.setAccount = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 delta = 2;
 * @return {number}
 */
proto.sf.antelope.type.v1.AccountRAMDelta.prototype.getDelta = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.AccountRAMDelta} returns this
 */
proto.sf.antelope.type.v1.AccountRAMDelta.prototype.setDelta = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.AccountDelta.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.AccountDelta.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.AccountDelta} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.AccountDelta.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, ""),
    delta: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.AccountDelta}
 */
proto.sf.antelope.type.v1.AccountDelta.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.AccountDelta;
  return proto.sf.antelope.type.v1.AccountDelta.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.AccountDelta} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.AccountDelta}
 */
proto.sf.antelope.type.v1.AccountDelta.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDelta(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.AccountDelta.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.AccountDelta.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.AccountDelta} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.AccountDelta.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDelta();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string account = 1;
 * @return {string}
 */
proto.sf.antelope.type.v1.AccountDelta.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.AccountDelta} returns this
 */
proto.sf.antelope.type.v1.AccountDelta.prototype.setAccount = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 delta = 2;
 * @return {number}
 */
proto.sf.antelope.type.v1.AccountDelta.prototype.getDelta = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.AccountDelta} returns this
 */
proto.sf.antelope.type.v1.AccountDelta.prototype.setDelta = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.Extension.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.Extension.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.Extension} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.Extension.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    data: msg.getData_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.Extension}
 */
proto.sf.antelope.type.v1.Extension.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.Extension;
  return proto.sf.antelope.type.v1.Extension.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.Extension} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.Extension}
 */
proto.sf.antelope.type.v1.Extension.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.Extension.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.Extension.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.Extension} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.Extension.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional uint32 type = 1;
 * @return {number}
 */
proto.sf.antelope.type.v1.Extension.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.Extension} returns this
 */
proto.sf.antelope.type.v1.Extension.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes data = 2;
 * @return {!(string|Uint8Array)}
 */
proto.sf.antelope.type.v1.Extension.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes data = 2;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.sf.antelope.type.v1.Extension.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.Extension.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sf.antelope.type.v1.Extension} returns this
 */
proto.sf.antelope.type.v1.Extension.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.TrxOp.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.TrxOp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.TrxOp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.TrxOp.toObject = function(includeInstance, msg) {
  var f, obj = {
    operation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    transactionId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    transaction: (f = msg.getTransaction()) && proto.sf.antelope.type.v1.SignedTransaction.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.TrxOp}
 */
proto.sf.antelope.type.v1.TrxOp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.TrxOp;
  return proto.sf.antelope.type.v1.TrxOp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.TrxOp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.TrxOp}
 */
proto.sf.antelope.type.v1.TrxOp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.sf.antelope.type.v1.TrxOp.Operation} */ (reader.readEnum());
      msg.setOperation(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactionId(value);
      break;
    case 4:
      var value = new proto.sf.antelope.type.v1.SignedTransaction;
      reader.readMessage(value,proto.sf.antelope.type.v1.SignedTransaction.deserializeBinaryFromReader);
      msg.setTransaction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.TrxOp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.TrxOp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.TrxOp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.TrxOp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperation();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTransactionId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTransaction();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.sf.antelope.type.v1.SignedTransaction.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.sf.antelope.type.v1.TrxOp.Operation = {
  OPERATION_UNKNOWN: 0,
  OPERATION_CREATE: 1
};

/**
 * optional Operation operation = 1;
 * @return {!proto.sf.antelope.type.v1.TrxOp.Operation}
 */
proto.sf.antelope.type.v1.TrxOp.prototype.getOperation = function() {
  return /** @type {!proto.sf.antelope.type.v1.TrxOp.Operation} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.sf.antelope.type.v1.TrxOp.Operation} value
 * @return {!proto.sf.antelope.type.v1.TrxOp} returns this
 */
proto.sf.antelope.type.v1.TrxOp.prototype.setOperation = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.sf.antelope.type.v1.TrxOp.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.TrxOp} returns this
 */
proto.sf.antelope.type.v1.TrxOp.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string transaction_id = 3;
 * @return {string}
 */
proto.sf.antelope.type.v1.TrxOp.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.TrxOp} returns this
 */
proto.sf.antelope.type.v1.TrxOp.prototype.setTransactionId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional SignedTransaction transaction = 4;
 * @return {?proto.sf.antelope.type.v1.SignedTransaction}
 */
proto.sf.antelope.type.v1.TrxOp.prototype.getTransaction = function() {
  return /** @type{?proto.sf.antelope.type.v1.SignedTransaction} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.SignedTransaction, 4));
};


/**
 * @param {?proto.sf.antelope.type.v1.SignedTransaction|undefined} value
 * @return {!proto.sf.antelope.type.v1.TrxOp} returns this
*/
proto.sf.antelope.type.v1.TrxOp.prototype.setTransaction = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.TrxOp} returns this
 */
proto.sf.antelope.type.v1.TrxOp.prototype.clearTransaction = function() {
  return this.setTransaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.TrxOp.prototype.hasTransaction = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.DBOp.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.DBOp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.DBOp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.DBOp.toObject = function(includeInstance, msg) {
  var f, obj = {
    operation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    actionIndex: jspb.Message.getFieldWithDefault(msg, 2, 0),
    code: jspb.Message.getFieldWithDefault(msg, 3, ""),
    scope: jspb.Message.getFieldWithDefault(msg, 4, ""),
    tableName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    primaryKey: jspb.Message.getFieldWithDefault(msg, 6, ""),
    oldPayer: jspb.Message.getFieldWithDefault(msg, 7, ""),
    newPayer: jspb.Message.getFieldWithDefault(msg, 8, ""),
    oldData: msg.getOldData_asB64(),
    newData: msg.getNewData_asB64(),
    oldDataJson: jspb.Message.getFieldWithDefault(msg, 11, ""),
    newDataJson: jspb.Message.getFieldWithDefault(msg, 12, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.DBOp}
 */
proto.sf.antelope.type.v1.DBOp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.DBOp;
  return proto.sf.antelope.type.v1.DBOp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.DBOp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.DBOp}
 */
proto.sf.antelope.type.v1.DBOp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.sf.antelope.type.v1.DBOp.Operation} */ (reader.readEnum());
      msg.setOperation(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setActionIndex(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setScope(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrimaryKey(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setOldPayer(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewPayer(value);
      break;
    case 9:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOldData(value);
      break;
    case 10:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setNewData(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setOldDataJson(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewDataJson(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.DBOp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.DBOp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.DBOp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.DBOp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperation();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getActionIndex();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getScope();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPrimaryKey();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getOldPayer();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getNewPayer();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getOldData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      9,
      f
    );
  }
  f = message.getNewData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      10,
      f
    );
  }
  f = message.getOldDataJson();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getNewDataJson();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.sf.antelope.type.v1.DBOp.Operation = {
  OPERATION_UNKNOWN: 0,
  OPERATION_INSERT: 1,
  OPERATION_UPDATE: 2,
  OPERATION_REMOVE: 3
};

/**
 * optional Operation operation = 1;
 * @return {!proto.sf.antelope.type.v1.DBOp.Operation}
 */
proto.sf.antelope.type.v1.DBOp.prototype.getOperation = function() {
  return /** @type {!proto.sf.antelope.type.v1.DBOp.Operation} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.sf.antelope.type.v1.DBOp.Operation} value
 * @return {!proto.sf.antelope.type.v1.DBOp} returns this
 */
proto.sf.antelope.type.v1.DBOp.prototype.setOperation = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional uint32 action_index = 2;
 * @return {number}
 */
proto.sf.antelope.type.v1.DBOp.prototype.getActionIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.DBOp} returns this
 */
proto.sf.antelope.type.v1.DBOp.prototype.setActionIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string code = 3;
 * @return {string}
 */
proto.sf.antelope.type.v1.DBOp.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.DBOp} returns this
 */
proto.sf.antelope.type.v1.DBOp.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string scope = 4;
 * @return {string}
 */
proto.sf.antelope.type.v1.DBOp.prototype.getScope = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.DBOp} returns this
 */
proto.sf.antelope.type.v1.DBOp.prototype.setScope = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string table_name = 5;
 * @return {string}
 */
proto.sf.antelope.type.v1.DBOp.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.DBOp} returns this
 */
proto.sf.antelope.type.v1.DBOp.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string primary_key = 6;
 * @return {string}
 */
proto.sf.antelope.type.v1.DBOp.prototype.getPrimaryKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.DBOp} returns this
 */
proto.sf.antelope.type.v1.DBOp.prototype.setPrimaryKey = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string old_payer = 7;
 * @return {string}
 */
proto.sf.antelope.type.v1.DBOp.prototype.getOldPayer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.DBOp} returns this
 */
proto.sf.antelope.type.v1.DBOp.prototype.setOldPayer = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string new_payer = 8;
 * @return {string}
 */
proto.sf.antelope.type.v1.DBOp.prototype.getNewPayer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.DBOp} returns this
 */
proto.sf.antelope.type.v1.DBOp.prototype.setNewPayer = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional bytes old_data = 9;
 * @return {!(string|Uint8Array)}
 */
proto.sf.antelope.type.v1.DBOp.prototype.getOldData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * optional bytes old_data = 9;
 * This is a type-conversion wrapper around `getOldData()`
 * @return {string}
 */
proto.sf.antelope.type.v1.DBOp.prototype.getOldData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOldData()));
};


/**
 * optional bytes old_data = 9;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOldData()`
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.DBOp.prototype.getOldData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOldData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sf.antelope.type.v1.DBOp} returns this
 */
proto.sf.antelope.type.v1.DBOp.prototype.setOldData = function(value) {
  return jspb.Message.setProto3BytesField(this, 9, value);
};


/**
 * optional bytes new_data = 10;
 * @return {!(string|Uint8Array)}
 */
proto.sf.antelope.type.v1.DBOp.prototype.getNewData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * optional bytes new_data = 10;
 * This is a type-conversion wrapper around `getNewData()`
 * @return {string}
 */
proto.sf.antelope.type.v1.DBOp.prototype.getNewData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getNewData()));
};


/**
 * optional bytes new_data = 10;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNewData()`
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.DBOp.prototype.getNewData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNewData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sf.antelope.type.v1.DBOp} returns this
 */
proto.sf.antelope.type.v1.DBOp.prototype.setNewData = function(value) {
  return jspb.Message.setProto3BytesField(this, 10, value);
};


/**
 * optional string old_data_json = 11;
 * @return {string}
 */
proto.sf.antelope.type.v1.DBOp.prototype.getOldDataJson = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.DBOp} returns this
 */
proto.sf.antelope.type.v1.DBOp.prototype.setOldDataJson = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string new_data_json = 12;
 * @return {string}
 */
proto.sf.antelope.type.v1.DBOp.prototype.getNewDataJson = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.DBOp} returns this
 */
proto.sf.antelope.type.v1.DBOp.prototype.setNewDataJson = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.RAMOp.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.RAMOp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.RAMOp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.RAMOp.toObject = function(includeInstance, msg) {
  var f, obj = {
    operation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    actionIndex: jspb.Message.getFieldWithDefault(msg, 2, 0),
    payer: jspb.Message.getFieldWithDefault(msg, 3, ""),
    delta: jspb.Message.getFieldWithDefault(msg, 4, 0),
    usage: jspb.Message.getFieldWithDefault(msg, 5, "0"),
    namespace: jspb.Message.getFieldWithDefault(msg, 6, 0),
    action: jspb.Message.getFieldWithDefault(msg, 7, 0),
    uniqueKey: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.RAMOp}
 */
proto.sf.antelope.type.v1.RAMOp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.RAMOp;
  return proto.sf.antelope.type.v1.RAMOp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.RAMOp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.RAMOp}
 */
proto.sf.antelope.type.v1.RAMOp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.sf.antelope.type.v1.RAMOp.Operation} */ (reader.readEnum());
      msg.setOperation(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setActionIndex(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayer(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDelta(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setUsage(value);
      break;
    case 6:
      var value = /** @type {!proto.sf.antelope.type.v1.RAMOp.Namespace} */ (reader.readEnum());
      msg.setNamespace(value);
      break;
    case 7:
      var value = /** @type {!proto.sf.antelope.type.v1.RAMOp.Action} */ (reader.readEnum());
      msg.setAction(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setUniqueKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.RAMOp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.RAMOp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.RAMOp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.RAMOp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperation();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getActionIndex();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getPayer();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDelta();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getUsage();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      5,
      f
    );
  }
  f = message.getNamespace();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getAction();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getUniqueKey();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.sf.antelope.type.v1.RAMOp.Operation = {
  OPERATION_UNKNOWN: 0,
  OPERATION_CREATE_TABLE: 1,
  OPERATION_DEFERRED_TRX_ADD: 2,
  OPERATION_DEFERRED_TRX_CANCEL: 3,
  OPERATION_DEFERRED_TRX_PUSHED: 4,
  OPERATION_DEFERRED_TRX_RAM_CORRECTION: 5,
  OPERATION_DEFERRED_TRX_REMOVED: 6,
  OPERATION_DELETEAUTH: 7,
  OPERATION_LINKAUTH: 8,
  OPERATION_NEWACCOUNT: 9,
  OPERATION_PRIMARY_INDEX_ADD: 10,
  OPERATION_PRIMARY_INDEX_REMOVE: 11,
  OPERATION_PRIMARY_INDEX_UPDATE: 12,
  OPERATION_PRIMARY_INDEX_UPDATE_ADD_NEW_PAYER: 13,
  OPERATION_PRIMARY_INDEX_UPDATE_REMOVE_OLD_PAYER: 14,
  OPERATION_REMOVE_TABLE: 15,
  OPERATION_SECONDARY_INDEX_ADD: 16,
  OPERATION_SECONDARY_INDEX_REMOVE: 17,
  OPERATION_SECONDARY_INDEX_UPDATE_ADD_NEW_PAYER: 18,
  OPERATION_SECONDARY_INDEX_UPDATE_REMOVE_OLD_PAYER: 19,
  OPERATION_SETABI: 20,
  OPERATION_SETCODE: 21,
  OPERATION_UNLINKAUTH: 22,
  OPERATION_UPDATEAUTH_CREATE: 23,
  OPERATION_UPDATEAUTH_UPDATE: 24,
  OPERATION_DEPRECATED: 25
};

/**
 * @enum {number}
 */
proto.sf.antelope.type.v1.RAMOp.Namespace = {
  NAMESPACE_UNKNOWN: 0,
  NAMESPACE_ABI: 1,
  NAMESPACE_ACCOUNT: 2,
  NAMESPACE_AUTH: 3,
  NAMESPACE_AUTH_LINK: 4,
  NAMESPACE_CODE: 5,
  NAMESPACE_DEFERRED_TRX: 6,
  NAMESPACE_SECONDARY_INDEX: 7,
  NAMESPACE_TABLE: 8,
  NAMESPACE_TABLE_ROW: 9
};

/**
 * @enum {number}
 */
proto.sf.antelope.type.v1.RAMOp.Action = {
  ACTION_UNKNOWN: 0,
  ACTION_ADD: 1,
  ACTION_CANCEL: 2,
  ACTION_CORRECTION: 3,
  ACTION_PUSH: 4,
  ACTION_REMOVE: 5,
  ACTION_UPDATE: 6
};

/**
 * optional Operation operation = 1;
 * @return {!proto.sf.antelope.type.v1.RAMOp.Operation}
 */
proto.sf.antelope.type.v1.RAMOp.prototype.getOperation = function() {
  return /** @type {!proto.sf.antelope.type.v1.RAMOp.Operation} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.sf.antelope.type.v1.RAMOp.Operation} value
 * @return {!proto.sf.antelope.type.v1.RAMOp} returns this
 */
proto.sf.antelope.type.v1.RAMOp.prototype.setOperation = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional uint32 action_index = 2;
 * @return {number}
 */
proto.sf.antelope.type.v1.RAMOp.prototype.getActionIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.RAMOp} returns this
 */
proto.sf.antelope.type.v1.RAMOp.prototype.setActionIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string payer = 3;
 * @return {string}
 */
proto.sf.antelope.type.v1.RAMOp.prototype.getPayer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.RAMOp} returns this
 */
proto.sf.antelope.type.v1.RAMOp.prototype.setPayer = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 delta = 4;
 * @return {number}
 */
proto.sf.antelope.type.v1.RAMOp.prototype.getDelta = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.RAMOp} returns this
 */
proto.sf.antelope.type.v1.RAMOp.prototype.setDelta = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 usage = 5;
 * @return {string}
 */
proto.sf.antelope.type.v1.RAMOp.prototype.getUsage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, "0"));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.RAMOp} returns this
 */
proto.sf.antelope.type.v1.RAMOp.prototype.setUsage = function(value) {
  return jspb.Message.setProto3StringIntField(this, 5, value);
};


/**
 * optional Namespace namespace = 6;
 * @return {!proto.sf.antelope.type.v1.RAMOp.Namespace}
 */
proto.sf.antelope.type.v1.RAMOp.prototype.getNamespace = function() {
  return /** @type {!proto.sf.antelope.type.v1.RAMOp.Namespace} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.sf.antelope.type.v1.RAMOp.Namespace} value
 * @return {!proto.sf.antelope.type.v1.RAMOp} returns this
 */
proto.sf.antelope.type.v1.RAMOp.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional Action action = 7;
 * @return {!proto.sf.antelope.type.v1.RAMOp.Action}
 */
proto.sf.antelope.type.v1.RAMOp.prototype.getAction = function() {
  return /** @type {!proto.sf.antelope.type.v1.RAMOp.Action} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.sf.antelope.type.v1.RAMOp.Action} value
 * @return {!proto.sf.antelope.type.v1.RAMOp} returns this
 */
proto.sf.antelope.type.v1.RAMOp.prototype.setAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional string unique_key = 8;
 * @return {string}
 */
proto.sf.antelope.type.v1.RAMOp.prototype.getUniqueKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.RAMOp} returns this
 */
proto.sf.antelope.type.v1.RAMOp.prototype.setUniqueKey = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.RAMCorrectionOp.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.RAMCorrectionOp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.RAMCorrectionOp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.RAMCorrectionOp.toObject = function(includeInstance, msg) {
  var f, obj = {
    correctionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    uniqueKey: jspb.Message.getFieldWithDefault(msg, 2, ""),
    payer: jspb.Message.getFieldWithDefault(msg, 3, ""),
    delta: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.RAMCorrectionOp}
 */
proto.sf.antelope.type.v1.RAMCorrectionOp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.RAMCorrectionOp;
  return proto.sf.antelope.type.v1.RAMCorrectionOp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.RAMCorrectionOp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.RAMCorrectionOp}
 */
proto.sf.antelope.type.v1.RAMCorrectionOp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCorrectionId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUniqueKey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayer(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDelta(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.RAMCorrectionOp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.RAMCorrectionOp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.RAMCorrectionOp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.RAMCorrectionOp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCorrectionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUniqueKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPayer();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDelta();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional string correction_id = 1;
 * @return {string}
 */
proto.sf.antelope.type.v1.RAMCorrectionOp.prototype.getCorrectionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.RAMCorrectionOp} returns this
 */
proto.sf.antelope.type.v1.RAMCorrectionOp.prototype.setCorrectionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string unique_key = 2;
 * @return {string}
 */
proto.sf.antelope.type.v1.RAMCorrectionOp.prototype.getUniqueKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.RAMCorrectionOp} returns this
 */
proto.sf.antelope.type.v1.RAMCorrectionOp.prototype.setUniqueKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string payer = 3;
 * @return {string}
 */
proto.sf.antelope.type.v1.RAMCorrectionOp.prototype.getPayer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.RAMCorrectionOp} returns this
 */
proto.sf.antelope.type.v1.RAMCorrectionOp.prototype.setPayer = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 delta = 4;
 * @return {number}
 */
proto.sf.antelope.type.v1.RAMCorrectionOp.prototype.getDelta = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.RAMCorrectionOp} returns this
 */
proto.sf.antelope.type.v1.RAMCorrectionOp.prototype.setDelta = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.TableOp.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.TableOp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.TableOp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.TableOp.toObject = function(includeInstance, msg) {
  var f, obj = {
    operation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    actionIndex: jspb.Message.getFieldWithDefault(msg, 2, 0),
    payer: jspb.Message.getFieldWithDefault(msg, 3, ""),
    code: jspb.Message.getFieldWithDefault(msg, 4, ""),
    scope: jspb.Message.getFieldWithDefault(msg, 5, ""),
    tableName: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.TableOp}
 */
proto.sf.antelope.type.v1.TableOp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.TableOp;
  return proto.sf.antelope.type.v1.TableOp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.TableOp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.TableOp}
 */
proto.sf.antelope.type.v1.TableOp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.sf.antelope.type.v1.TableOp.Operation} */ (reader.readEnum());
      msg.setOperation(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setActionIndex(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayer(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setScope(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.TableOp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.TableOp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.TableOp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.TableOp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperation();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getActionIndex();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getPayer();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getScope();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.sf.antelope.type.v1.TableOp.Operation = {
  OPERATION_UNKNOWN: 0,
  OPERATION_INSERT: 1,
  OPERATION_REMOVE: 2
};

/**
 * optional Operation operation = 1;
 * @return {!proto.sf.antelope.type.v1.TableOp.Operation}
 */
proto.sf.antelope.type.v1.TableOp.prototype.getOperation = function() {
  return /** @type {!proto.sf.antelope.type.v1.TableOp.Operation} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.sf.antelope.type.v1.TableOp.Operation} value
 * @return {!proto.sf.antelope.type.v1.TableOp} returns this
 */
proto.sf.antelope.type.v1.TableOp.prototype.setOperation = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional uint32 action_index = 2;
 * @return {number}
 */
proto.sf.antelope.type.v1.TableOp.prototype.getActionIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.TableOp} returns this
 */
proto.sf.antelope.type.v1.TableOp.prototype.setActionIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string payer = 3;
 * @return {string}
 */
proto.sf.antelope.type.v1.TableOp.prototype.getPayer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.TableOp} returns this
 */
proto.sf.antelope.type.v1.TableOp.prototype.setPayer = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string code = 4;
 * @return {string}
 */
proto.sf.antelope.type.v1.TableOp.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.TableOp} returns this
 */
proto.sf.antelope.type.v1.TableOp.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string scope = 5;
 * @return {string}
 */
proto.sf.antelope.type.v1.TableOp.prototype.getScope = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.TableOp} returns this
 */
proto.sf.antelope.type.v1.TableOp.prototype.setScope = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string table_name = 6;
 * @return {string}
 */
proto.sf.antelope.type.v1.TableOp.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.TableOp} returns this
 */
proto.sf.antelope.type.v1.TableOp.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.DTrxOp.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.DTrxOp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.DTrxOp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.DTrxOp.toObject = function(includeInstance, msg) {
  var f, obj = {
    operation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    actionIndex: jspb.Message.getFieldWithDefault(msg, 2, 0),
    sender: jspb.Message.getFieldWithDefault(msg, 3, ""),
    senderId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    payer: jspb.Message.getFieldWithDefault(msg, 5, ""),
    publishedAt: jspb.Message.getFieldWithDefault(msg, 6, ""),
    delayUntil: jspb.Message.getFieldWithDefault(msg, 7, ""),
    expirationAt: jspb.Message.getFieldWithDefault(msg, 8, ""),
    transactionId: jspb.Message.getFieldWithDefault(msg, 9, ""),
    transaction: (f = msg.getTransaction()) && proto.sf.antelope.type.v1.SignedTransaction.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.DTrxOp}
 */
proto.sf.antelope.type.v1.DTrxOp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.DTrxOp;
  return proto.sf.antelope.type.v1.DTrxOp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.DTrxOp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.DTrxOp}
 */
proto.sf.antelope.type.v1.DTrxOp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.sf.antelope.type.v1.DTrxOp.Operation} */ (reader.readEnum());
      msg.setOperation(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setActionIndex(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSender(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSenderId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayer(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublishedAt(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDelayUntil(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setExpirationAt(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactionId(value);
      break;
    case 10:
      var value = new proto.sf.antelope.type.v1.SignedTransaction;
      reader.readMessage(value,proto.sf.antelope.type.v1.SignedTransaction.deserializeBinaryFromReader);
      msg.setTransaction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.DTrxOp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.DTrxOp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.DTrxOp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.DTrxOp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperation();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getActionIndex();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getSender();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSenderId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPayer();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPublishedAt();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getDelayUntil();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getExpirationAt();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getTransactionId();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getTransaction();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.sf.antelope.type.v1.SignedTransaction.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.sf.antelope.type.v1.DTrxOp.Operation = {
  OPERATION_UNKNOWN: 0,
  OPERATION_CREATE: 1,
  OPERATION_PUSH_CREATE: 2,
  OPERATION_FAILED: 3,
  OPERATION_CANCEL: 4,
  OPERATION_MODIFY_CANCEL: 5,
  OPERATION_MODIFY_CREATE: 6
};

/**
 * optional Operation operation = 1;
 * @return {!proto.sf.antelope.type.v1.DTrxOp.Operation}
 */
proto.sf.antelope.type.v1.DTrxOp.prototype.getOperation = function() {
  return /** @type {!proto.sf.antelope.type.v1.DTrxOp.Operation} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.sf.antelope.type.v1.DTrxOp.Operation} value
 * @return {!proto.sf.antelope.type.v1.DTrxOp} returns this
 */
proto.sf.antelope.type.v1.DTrxOp.prototype.setOperation = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional uint32 action_index = 2;
 * @return {number}
 */
proto.sf.antelope.type.v1.DTrxOp.prototype.getActionIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.DTrxOp} returns this
 */
proto.sf.antelope.type.v1.DTrxOp.prototype.setActionIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string sender = 3;
 * @return {string}
 */
proto.sf.antelope.type.v1.DTrxOp.prototype.getSender = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.DTrxOp} returns this
 */
proto.sf.antelope.type.v1.DTrxOp.prototype.setSender = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string sender_id = 4;
 * @return {string}
 */
proto.sf.antelope.type.v1.DTrxOp.prototype.getSenderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.DTrxOp} returns this
 */
proto.sf.antelope.type.v1.DTrxOp.prototype.setSenderId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string payer = 5;
 * @return {string}
 */
proto.sf.antelope.type.v1.DTrxOp.prototype.getPayer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.DTrxOp} returns this
 */
proto.sf.antelope.type.v1.DTrxOp.prototype.setPayer = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string published_at = 6;
 * @return {string}
 */
proto.sf.antelope.type.v1.DTrxOp.prototype.getPublishedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.DTrxOp} returns this
 */
proto.sf.antelope.type.v1.DTrxOp.prototype.setPublishedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string delay_until = 7;
 * @return {string}
 */
proto.sf.antelope.type.v1.DTrxOp.prototype.getDelayUntil = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.DTrxOp} returns this
 */
proto.sf.antelope.type.v1.DTrxOp.prototype.setDelayUntil = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string expiration_at = 8;
 * @return {string}
 */
proto.sf.antelope.type.v1.DTrxOp.prototype.getExpirationAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.DTrxOp} returns this
 */
proto.sf.antelope.type.v1.DTrxOp.prototype.setExpirationAt = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string transaction_id = 9;
 * @return {string}
 */
proto.sf.antelope.type.v1.DTrxOp.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.DTrxOp} returns this
 */
proto.sf.antelope.type.v1.DTrxOp.prototype.setTransactionId = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional SignedTransaction transaction = 10;
 * @return {?proto.sf.antelope.type.v1.SignedTransaction}
 */
proto.sf.antelope.type.v1.DTrxOp.prototype.getTransaction = function() {
  return /** @type{?proto.sf.antelope.type.v1.SignedTransaction} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.SignedTransaction, 10));
};


/**
 * @param {?proto.sf.antelope.type.v1.SignedTransaction|undefined} value
 * @return {!proto.sf.antelope.type.v1.DTrxOp} returns this
*/
proto.sf.antelope.type.v1.DTrxOp.prototype.setTransaction = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.DTrxOp} returns this
 */
proto.sf.antelope.type.v1.DTrxOp.prototype.clearTransaction = function() {
  return this.setTransaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.DTrxOp.prototype.hasTransaction = function() {
  return jspb.Message.getField(this, 10) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.ExtDTrxOp.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.ExtDTrxOp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.ExtDTrxOp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.ExtDTrxOp.toObject = function(includeInstance, msg) {
  var f, obj = {
    sourceTransactionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blockNum: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    blockId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    blockTime: (f = msg.getBlockTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    dtrxOp: (f = msg.getDtrxOp()) && proto.sf.antelope.type.v1.DTrxOp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.ExtDTrxOp}
 */
proto.sf.antelope.type.v1.ExtDTrxOp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.ExtDTrxOp;
  return proto.sf.antelope.type.v1.ExtDTrxOp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.ExtDTrxOp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.ExtDTrxOp}
 */
proto.sf.antelope.type.v1.ExtDTrxOp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceTransactionId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setBlockNum(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlockId(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setBlockTime(value);
      break;
    case 5:
      var value = new proto.sf.antelope.type.v1.DTrxOp;
      reader.readMessage(value,proto.sf.antelope.type.v1.DTrxOp.deserializeBinaryFromReader);
      msg.setDtrxOp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.ExtDTrxOp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.ExtDTrxOp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.ExtDTrxOp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.ExtDTrxOp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSourceTransactionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlockNum();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      2,
      f
    );
  }
  f = message.getBlockId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBlockTime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDtrxOp();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.sf.antelope.type.v1.DTrxOp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string source_transaction_id = 1;
 * @return {string}
 */
proto.sf.antelope.type.v1.ExtDTrxOp.prototype.getSourceTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.ExtDTrxOp} returns this
 */
proto.sf.antelope.type.v1.ExtDTrxOp.prototype.setSourceTransactionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 block_num = 2;
 * @return {string}
 */
proto.sf.antelope.type.v1.ExtDTrxOp.prototype.getBlockNum = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.ExtDTrxOp} returns this
 */
proto.sf.antelope.type.v1.ExtDTrxOp.prototype.setBlockNum = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional string block_id = 3;
 * @return {string}
 */
proto.sf.antelope.type.v1.ExtDTrxOp.prototype.getBlockId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.ExtDTrxOp} returns this
 */
proto.sf.antelope.type.v1.ExtDTrxOp.prototype.setBlockId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp block_time = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.sf.antelope.type.v1.ExtDTrxOp.prototype.getBlockTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.sf.antelope.type.v1.ExtDTrxOp} returns this
*/
proto.sf.antelope.type.v1.ExtDTrxOp.prototype.setBlockTime = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.ExtDTrxOp} returns this
 */
proto.sf.antelope.type.v1.ExtDTrxOp.prototype.clearBlockTime = function() {
  return this.setBlockTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.ExtDTrxOp.prototype.hasBlockTime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional DTrxOp dtrx_op = 5;
 * @return {?proto.sf.antelope.type.v1.DTrxOp}
 */
proto.sf.antelope.type.v1.ExtDTrxOp.prototype.getDtrxOp = function() {
  return /** @type{?proto.sf.antelope.type.v1.DTrxOp} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.DTrxOp, 5));
};


/**
 * @param {?proto.sf.antelope.type.v1.DTrxOp|undefined} value
 * @return {!proto.sf.antelope.type.v1.ExtDTrxOp} returns this
*/
proto.sf.antelope.type.v1.ExtDTrxOp.prototype.setDtrxOp = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.ExtDTrxOp} returns this
 */
proto.sf.antelope.type.v1.ExtDTrxOp.prototype.clearDtrxOp = function() {
  return this.setDtrxOp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.ExtDTrxOp.prototype.hasDtrxOp = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.FeatureOp.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.FeatureOp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.FeatureOp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.FeatureOp.toObject = function(includeInstance, msg) {
  var f, obj = {
    kind: jspb.Message.getFieldWithDefault(msg, 1, ""),
    actionIndex: jspb.Message.getFieldWithDefault(msg, 2, 0),
    featureDigest: jspb.Message.getFieldWithDefault(msg, 3, ""),
    feature: (f = msg.getFeature()) && proto.sf.antelope.type.v1.Feature.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.FeatureOp}
 */
proto.sf.antelope.type.v1.FeatureOp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.FeatureOp;
  return proto.sf.antelope.type.v1.FeatureOp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.FeatureOp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.FeatureOp}
 */
proto.sf.antelope.type.v1.FeatureOp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKind(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setActionIndex(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFeatureDigest(value);
      break;
    case 4:
      var value = new proto.sf.antelope.type.v1.Feature;
      reader.readMessage(value,proto.sf.antelope.type.v1.Feature.deserializeBinaryFromReader);
      msg.setFeature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.FeatureOp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.FeatureOp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.FeatureOp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.FeatureOp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKind();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getActionIndex();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getFeatureDigest();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFeature();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.sf.antelope.type.v1.Feature.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.sf.antelope.type.v1.FeatureOp.Kind = {
  KIND_UNKNOWN: 0,
  KIND_PRE_ACTIVATE: 1,
  KIND_ACTIVATE: 2
};

/**
 * optional string kind = 1;
 * @return {string}
 */
proto.sf.antelope.type.v1.FeatureOp.prototype.getKind = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.FeatureOp} returns this
 */
proto.sf.antelope.type.v1.FeatureOp.prototype.setKind = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 action_index = 2;
 * @return {number}
 */
proto.sf.antelope.type.v1.FeatureOp.prototype.getActionIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.FeatureOp} returns this
 */
proto.sf.antelope.type.v1.FeatureOp.prototype.setActionIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string feature_digest = 3;
 * @return {string}
 */
proto.sf.antelope.type.v1.FeatureOp.prototype.getFeatureDigest = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.FeatureOp} returns this
 */
proto.sf.antelope.type.v1.FeatureOp.prototype.setFeatureDigest = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Feature feature = 4;
 * @return {?proto.sf.antelope.type.v1.Feature}
 */
proto.sf.antelope.type.v1.FeatureOp.prototype.getFeature = function() {
  return /** @type{?proto.sf.antelope.type.v1.Feature} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.Feature, 4));
};


/**
 * @param {?proto.sf.antelope.type.v1.Feature|undefined} value
 * @return {!proto.sf.antelope.type.v1.FeatureOp} returns this
*/
proto.sf.antelope.type.v1.FeatureOp.prototype.setFeature = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.FeatureOp} returns this
 */
proto.sf.antelope.type.v1.FeatureOp.prototype.clearFeature = function() {
  return this.setFeature(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.FeatureOp.prototype.hasFeature = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.CreationFlatNode.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.CreationFlatNode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.CreationFlatNode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.CreationFlatNode.toObject = function(includeInstance, msg) {
  var f, obj = {
    creatorActionIndex: jspb.Message.getFieldWithDefault(msg, 1, 0),
    executionActionIndex: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.CreationFlatNode}
 */
proto.sf.antelope.type.v1.CreationFlatNode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.CreationFlatNode;
  return proto.sf.antelope.type.v1.CreationFlatNode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.CreationFlatNode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.CreationFlatNode}
 */
proto.sf.antelope.type.v1.CreationFlatNode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCreatorActionIndex(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setExecutionActionIndex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.CreationFlatNode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.CreationFlatNode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.CreationFlatNode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.CreationFlatNode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCreatorActionIndex();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getExecutionActionIndex();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional int32 creator_action_index = 1;
 * @return {number}
 */
proto.sf.antelope.type.v1.CreationFlatNode.prototype.getCreatorActionIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.CreationFlatNode} returns this
 */
proto.sf.antelope.type.v1.CreationFlatNode.prototype.setCreatorActionIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 execution_action_index = 2;
 * @return {number}
 */
proto.sf.antelope.type.v1.CreationFlatNode.prototype.getExecutionActionIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.CreationFlatNode} returns this
 */
proto.sf.antelope.type.v1.CreationFlatNode.prototype.setExecutionActionIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.PermOp.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.PermOp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.PermOp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.PermOp.toObject = function(includeInstance, msg) {
  var f, obj = {
    operation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    actionIndex: jspb.Message.getFieldWithDefault(msg, 2, 0),
    oldPerm: (f = msg.getOldPerm()) && proto.sf.antelope.type.v1.PermissionObject.toObject(includeInstance, f),
    newPerm: (f = msg.getNewPerm()) && proto.sf.antelope.type.v1.PermissionObject.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.PermOp}
 */
proto.sf.antelope.type.v1.PermOp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.PermOp;
  return proto.sf.antelope.type.v1.PermOp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.PermOp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.PermOp}
 */
proto.sf.antelope.type.v1.PermOp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.sf.antelope.type.v1.PermOp.Operation} */ (reader.readEnum());
      msg.setOperation(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setActionIndex(value);
      break;
    case 8:
      var value = new proto.sf.antelope.type.v1.PermissionObject;
      reader.readMessage(value,proto.sf.antelope.type.v1.PermissionObject.deserializeBinaryFromReader);
      msg.setOldPerm(value);
      break;
    case 9:
      var value = new proto.sf.antelope.type.v1.PermissionObject;
      reader.readMessage(value,proto.sf.antelope.type.v1.PermissionObject.deserializeBinaryFromReader);
      msg.setNewPerm(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.PermOp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.PermOp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.PermOp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.PermOp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperation();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getActionIndex();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getOldPerm();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.sf.antelope.type.v1.PermissionObject.serializeBinaryToWriter
    );
  }
  f = message.getNewPerm();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.sf.antelope.type.v1.PermissionObject.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.sf.antelope.type.v1.PermOp.Operation = {
  OPERATION_UNKNOWN: 0,
  OPERATION_INSERT: 1,
  OPERATION_UPDATE: 2,
  OPERATION_REMOVE: 3
};

/**
 * optional Operation operation = 1;
 * @return {!proto.sf.antelope.type.v1.PermOp.Operation}
 */
proto.sf.antelope.type.v1.PermOp.prototype.getOperation = function() {
  return /** @type {!proto.sf.antelope.type.v1.PermOp.Operation} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.sf.antelope.type.v1.PermOp.Operation} value
 * @return {!proto.sf.antelope.type.v1.PermOp} returns this
 */
proto.sf.antelope.type.v1.PermOp.prototype.setOperation = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional uint32 action_index = 2;
 * @return {number}
 */
proto.sf.antelope.type.v1.PermOp.prototype.getActionIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.PermOp} returns this
 */
proto.sf.antelope.type.v1.PermOp.prototype.setActionIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional PermissionObject old_perm = 8;
 * @return {?proto.sf.antelope.type.v1.PermissionObject}
 */
proto.sf.antelope.type.v1.PermOp.prototype.getOldPerm = function() {
  return /** @type{?proto.sf.antelope.type.v1.PermissionObject} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.PermissionObject, 8));
};


/**
 * @param {?proto.sf.antelope.type.v1.PermissionObject|undefined} value
 * @return {!proto.sf.antelope.type.v1.PermOp} returns this
*/
proto.sf.antelope.type.v1.PermOp.prototype.setOldPerm = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.PermOp} returns this
 */
proto.sf.antelope.type.v1.PermOp.prototype.clearOldPerm = function() {
  return this.setOldPerm(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.PermOp.prototype.hasOldPerm = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional PermissionObject new_perm = 9;
 * @return {?proto.sf.antelope.type.v1.PermissionObject}
 */
proto.sf.antelope.type.v1.PermOp.prototype.getNewPerm = function() {
  return /** @type{?proto.sf.antelope.type.v1.PermissionObject} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.PermissionObject, 9));
};


/**
 * @param {?proto.sf.antelope.type.v1.PermissionObject|undefined} value
 * @return {!proto.sf.antelope.type.v1.PermOp} returns this
*/
proto.sf.antelope.type.v1.PermOp.prototype.setNewPerm = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.PermOp} returns this
 */
proto.sf.antelope.type.v1.PermOp.prototype.clearNewPerm = function() {
  return this.setNewPerm(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.PermOp.prototype.hasNewPerm = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.PermissionObject.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.PermissionObject.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.PermissionObject} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.PermissionObject.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 10, "0"),
    parentId: jspb.Message.getFieldWithDefault(msg, 11, "0"),
    owner: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    lastUpdated: (f = msg.getLastUpdated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    authority: (f = msg.getAuthority()) && proto.sf.antelope.type.v1.Authority.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.PermissionObject}
 */
proto.sf.antelope.type.v1.PermissionObject.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.PermissionObject;
  return proto.sf.antelope.type.v1.PermissionObject.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.PermissionObject} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.PermissionObject}
 */
proto.sf.antelope.type.v1.PermissionObject.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 10:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setId(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setParentId(value);
      break;
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastUpdated(value);
      break;
    case 4:
      var value = new proto.sf.antelope.type.v1.Authority;
      reader.readMessage(value,proto.sf.antelope.type.v1.Authority.deserializeBinaryFromReader);
      msg.setAuthority(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.PermissionObject.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.PermissionObject.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.PermissionObject} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.PermissionObject.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      10,
      f
    );
  }
  f = message.getParentId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      11,
      f
    );
  }
  f = message.getOwner();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLastUpdated();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getAuthority();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.sf.antelope.type.v1.Authority.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 id = 10;
 * @return {string}
 */
proto.sf.antelope.type.v1.PermissionObject.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, "0"));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.PermissionObject} returns this
 */
proto.sf.antelope.type.v1.PermissionObject.prototype.setId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 10, value);
};


/**
 * optional uint64 parent_id = 11;
 * @return {string}
 */
proto.sf.antelope.type.v1.PermissionObject.prototype.getParentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, "0"));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.PermissionObject} returns this
 */
proto.sf.antelope.type.v1.PermissionObject.prototype.setParentId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 11, value);
};


/**
 * optional string owner = 1;
 * @return {string}
 */
proto.sf.antelope.type.v1.PermissionObject.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.PermissionObject} returns this
 */
proto.sf.antelope.type.v1.PermissionObject.prototype.setOwner = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.sf.antelope.type.v1.PermissionObject.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.PermissionObject} returns this
 */
proto.sf.antelope.type.v1.PermissionObject.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp last_updated = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.sf.antelope.type.v1.PermissionObject.prototype.getLastUpdated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.sf.antelope.type.v1.PermissionObject} returns this
*/
proto.sf.antelope.type.v1.PermissionObject.prototype.setLastUpdated = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.PermissionObject} returns this
 */
proto.sf.antelope.type.v1.PermissionObject.prototype.clearLastUpdated = function() {
  return this.setLastUpdated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.PermissionObject.prototype.hasLastUpdated = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Authority authority = 4;
 * @return {?proto.sf.antelope.type.v1.Authority}
 */
proto.sf.antelope.type.v1.PermissionObject.prototype.getAuthority = function() {
  return /** @type{?proto.sf.antelope.type.v1.Authority} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.Authority, 4));
};


/**
 * @param {?proto.sf.antelope.type.v1.Authority|undefined} value
 * @return {!proto.sf.antelope.type.v1.PermissionObject} returns this
*/
proto.sf.antelope.type.v1.PermissionObject.prototype.setAuthority = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.PermissionObject} returns this
 */
proto.sf.antelope.type.v1.PermissionObject.prototype.clearAuthority = function() {
  return this.setAuthority(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.PermissionObject.prototype.hasAuthority = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.Permission.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.Permission.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.Permission} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.Permission.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    parent: jspb.Message.getFieldWithDefault(msg, 2, ""),
    requiredAuth: (f = msg.getRequiredAuth()) && proto.sf.antelope.type.v1.Authority.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.Permission}
 */
proto.sf.antelope.type.v1.Permission.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.Permission;
  return proto.sf.antelope.type.v1.Permission.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.Permission} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.Permission}
 */
proto.sf.antelope.type.v1.Permission.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 3:
      var value = new proto.sf.antelope.type.v1.Authority;
      reader.readMessage(value,proto.sf.antelope.type.v1.Authority.deserializeBinaryFromReader);
      msg.setRequiredAuth(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.Permission.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.Permission.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.Permission} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.Permission.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRequiredAuth();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.sf.antelope.type.v1.Authority.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.sf.antelope.type.v1.Permission.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.Permission} returns this
 */
proto.sf.antelope.type.v1.Permission.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string parent = 2;
 * @return {string}
 */
proto.sf.antelope.type.v1.Permission.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.Permission} returns this
 */
proto.sf.antelope.type.v1.Permission.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Authority required_auth = 3;
 * @return {?proto.sf.antelope.type.v1.Authority}
 */
proto.sf.antelope.type.v1.Permission.prototype.getRequiredAuth = function() {
  return /** @type{?proto.sf.antelope.type.v1.Authority} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.Authority, 3));
};


/**
 * @param {?proto.sf.antelope.type.v1.Authority|undefined} value
 * @return {!proto.sf.antelope.type.v1.Permission} returns this
*/
proto.sf.antelope.type.v1.Permission.prototype.setRequiredAuth = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.Permission} returns this
 */
proto.sf.antelope.type.v1.Permission.prototype.clearRequiredAuth = function() {
  return this.setRequiredAuth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.Permission.prototype.hasRequiredAuth = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sf.antelope.type.v1.Authority.repeatedFields_ = [2,3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.Authority.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.Authority.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.Authority} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.Authority.toObject = function(includeInstance, msg) {
  var f, obj = {
    threshold: jspb.Message.getFieldWithDefault(msg, 1, 0),
    keysList: jspb.Message.toObjectList(msg.getKeysList(),
    proto.sf.antelope.type.v1.KeyWeight.toObject, includeInstance),
    accountsList: jspb.Message.toObjectList(msg.getAccountsList(),
    proto.sf.antelope.type.v1.PermissionLevelWeight.toObject, includeInstance),
    waitsList: jspb.Message.toObjectList(msg.getWaitsList(),
    proto.sf.antelope.type.v1.WaitWeight.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.Authority}
 */
proto.sf.antelope.type.v1.Authority.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.Authority;
  return proto.sf.antelope.type.v1.Authority.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.Authority} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.Authority}
 */
proto.sf.antelope.type.v1.Authority.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setThreshold(value);
      break;
    case 2:
      var value = new proto.sf.antelope.type.v1.KeyWeight;
      reader.readMessage(value,proto.sf.antelope.type.v1.KeyWeight.deserializeBinaryFromReader);
      msg.addKeys(value);
      break;
    case 3:
      var value = new proto.sf.antelope.type.v1.PermissionLevelWeight;
      reader.readMessage(value,proto.sf.antelope.type.v1.PermissionLevelWeight.deserializeBinaryFromReader);
      msg.addAccounts(value);
      break;
    case 4:
      var value = new proto.sf.antelope.type.v1.WaitWeight;
      reader.readMessage(value,proto.sf.antelope.type.v1.WaitWeight.deserializeBinaryFromReader);
      msg.addWaits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.Authority.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.Authority.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.Authority} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.Authority.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getThreshold();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getKeysList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.sf.antelope.type.v1.KeyWeight.serializeBinaryToWriter
    );
  }
  f = message.getAccountsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.sf.antelope.type.v1.PermissionLevelWeight.serializeBinaryToWriter
    );
  }
  f = message.getWaitsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.sf.antelope.type.v1.WaitWeight.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 threshold = 1;
 * @return {number}
 */
proto.sf.antelope.type.v1.Authority.prototype.getThreshold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.Authority} returns this
 */
proto.sf.antelope.type.v1.Authority.prototype.setThreshold = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated KeyWeight keys = 2;
 * @return {!Array<!proto.sf.antelope.type.v1.KeyWeight>}
 */
proto.sf.antelope.type.v1.Authority.prototype.getKeysList = function() {
  return /** @type{!Array<!proto.sf.antelope.type.v1.KeyWeight>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sf.antelope.type.v1.KeyWeight, 2));
};


/**
 * @param {!Array<!proto.sf.antelope.type.v1.KeyWeight>} value
 * @return {!proto.sf.antelope.type.v1.Authority} returns this
*/
proto.sf.antelope.type.v1.Authority.prototype.setKeysList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.sf.antelope.type.v1.KeyWeight=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.KeyWeight}
 */
proto.sf.antelope.type.v1.Authority.prototype.addKeys = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.sf.antelope.type.v1.KeyWeight, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.Authority} returns this
 */
proto.sf.antelope.type.v1.Authority.prototype.clearKeysList = function() {
  return this.setKeysList([]);
};


/**
 * repeated PermissionLevelWeight accounts = 3;
 * @return {!Array<!proto.sf.antelope.type.v1.PermissionLevelWeight>}
 */
proto.sf.antelope.type.v1.Authority.prototype.getAccountsList = function() {
  return /** @type{!Array<!proto.sf.antelope.type.v1.PermissionLevelWeight>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sf.antelope.type.v1.PermissionLevelWeight, 3));
};


/**
 * @param {!Array<!proto.sf.antelope.type.v1.PermissionLevelWeight>} value
 * @return {!proto.sf.antelope.type.v1.Authority} returns this
*/
proto.sf.antelope.type.v1.Authority.prototype.setAccountsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.sf.antelope.type.v1.PermissionLevelWeight=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.PermissionLevelWeight}
 */
proto.sf.antelope.type.v1.Authority.prototype.addAccounts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.sf.antelope.type.v1.PermissionLevelWeight, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.Authority} returns this
 */
proto.sf.antelope.type.v1.Authority.prototype.clearAccountsList = function() {
  return this.setAccountsList([]);
};


/**
 * repeated WaitWeight waits = 4;
 * @return {!Array<!proto.sf.antelope.type.v1.WaitWeight>}
 */
proto.sf.antelope.type.v1.Authority.prototype.getWaitsList = function() {
  return /** @type{!Array<!proto.sf.antelope.type.v1.WaitWeight>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sf.antelope.type.v1.WaitWeight, 4));
};


/**
 * @param {!Array<!proto.sf.antelope.type.v1.WaitWeight>} value
 * @return {!proto.sf.antelope.type.v1.Authority} returns this
*/
proto.sf.antelope.type.v1.Authority.prototype.setWaitsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.sf.antelope.type.v1.WaitWeight=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.WaitWeight}
 */
proto.sf.antelope.type.v1.Authority.prototype.addWaits = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.sf.antelope.type.v1.WaitWeight, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.Authority} returns this
 */
proto.sf.antelope.type.v1.Authority.prototype.clearWaitsList = function() {
  return this.setWaitsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.KeyWeight.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.KeyWeight.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.KeyWeight} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.KeyWeight.toObject = function(includeInstance, msg) {
  var f, obj = {
    publicKey: jspb.Message.getFieldWithDefault(msg, 1, ""),
    weight: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.KeyWeight}
 */
proto.sf.antelope.type.v1.KeyWeight.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.KeyWeight;
  return proto.sf.antelope.type.v1.KeyWeight.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.KeyWeight} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.KeyWeight}
 */
proto.sf.antelope.type.v1.KeyWeight.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublicKey(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setWeight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.KeyWeight.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.KeyWeight.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.KeyWeight} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.KeyWeight.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublicKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWeight();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional string public_key = 1;
 * @return {string}
 */
proto.sf.antelope.type.v1.KeyWeight.prototype.getPublicKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.KeyWeight} returns this
 */
proto.sf.antelope.type.v1.KeyWeight.prototype.setPublicKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 weight = 2;
 * @return {number}
 */
proto.sf.antelope.type.v1.KeyWeight.prototype.getWeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.KeyWeight} returns this
 */
proto.sf.antelope.type.v1.KeyWeight.prototype.setWeight = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.PermissionLevel.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.PermissionLevel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.PermissionLevel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.PermissionLevel.toObject = function(includeInstance, msg) {
  var f, obj = {
    actor: jspb.Message.getFieldWithDefault(msg, 1, ""),
    permission: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.PermissionLevel}
 */
proto.sf.antelope.type.v1.PermissionLevel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.PermissionLevel;
  return proto.sf.antelope.type.v1.PermissionLevel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.PermissionLevel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.PermissionLevel}
 */
proto.sf.antelope.type.v1.PermissionLevel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setActor(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPermission(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.PermissionLevel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.PermissionLevel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.PermissionLevel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.PermissionLevel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActor();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPermission();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string actor = 1;
 * @return {string}
 */
proto.sf.antelope.type.v1.PermissionLevel.prototype.getActor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.PermissionLevel} returns this
 */
proto.sf.antelope.type.v1.PermissionLevel.prototype.setActor = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string permission = 2;
 * @return {string}
 */
proto.sf.antelope.type.v1.PermissionLevel.prototype.getPermission = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.PermissionLevel} returns this
 */
proto.sf.antelope.type.v1.PermissionLevel.prototype.setPermission = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.PermissionLevelWeight.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.PermissionLevelWeight.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.PermissionLevelWeight} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.PermissionLevelWeight.toObject = function(includeInstance, msg) {
  var f, obj = {
    permission: (f = msg.getPermission()) && proto.sf.antelope.type.v1.PermissionLevel.toObject(includeInstance, f),
    weight: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.PermissionLevelWeight}
 */
proto.sf.antelope.type.v1.PermissionLevelWeight.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.PermissionLevelWeight;
  return proto.sf.antelope.type.v1.PermissionLevelWeight.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.PermissionLevelWeight} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.PermissionLevelWeight}
 */
proto.sf.antelope.type.v1.PermissionLevelWeight.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sf.antelope.type.v1.PermissionLevel;
      reader.readMessage(value,proto.sf.antelope.type.v1.PermissionLevel.deserializeBinaryFromReader);
      msg.setPermission(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setWeight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.PermissionLevelWeight.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.PermissionLevelWeight.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.PermissionLevelWeight} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.PermissionLevelWeight.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPermission();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sf.antelope.type.v1.PermissionLevel.serializeBinaryToWriter
    );
  }
  f = message.getWeight();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional PermissionLevel permission = 1;
 * @return {?proto.sf.antelope.type.v1.PermissionLevel}
 */
proto.sf.antelope.type.v1.PermissionLevelWeight.prototype.getPermission = function() {
  return /** @type{?proto.sf.antelope.type.v1.PermissionLevel} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.PermissionLevel, 1));
};


/**
 * @param {?proto.sf.antelope.type.v1.PermissionLevel|undefined} value
 * @return {!proto.sf.antelope.type.v1.PermissionLevelWeight} returns this
*/
proto.sf.antelope.type.v1.PermissionLevelWeight.prototype.setPermission = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.PermissionLevelWeight} returns this
 */
proto.sf.antelope.type.v1.PermissionLevelWeight.prototype.clearPermission = function() {
  return this.setPermission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.PermissionLevelWeight.prototype.hasPermission = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 weight = 2;
 * @return {number}
 */
proto.sf.antelope.type.v1.PermissionLevelWeight.prototype.getWeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.PermissionLevelWeight} returns this
 */
proto.sf.antelope.type.v1.PermissionLevelWeight.prototype.setWeight = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.WaitWeight.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.WaitWeight.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.WaitWeight} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.WaitWeight.toObject = function(includeInstance, msg) {
  var f, obj = {
    waitSec: jspb.Message.getFieldWithDefault(msg, 1, 0),
    weight: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.WaitWeight}
 */
proto.sf.antelope.type.v1.WaitWeight.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.WaitWeight;
  return proto.sf.antelope.type.v1.WaitWeight.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.WaitWeight} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.WaitWeight}
 */
proto.sf.antelope.type.v1.WaitWeight.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setWaitSec(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setWeight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.WaitWeight.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.WaitWeight.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.WaitWeight} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.WaitWeight.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWaitSec();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getWeight();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 wait_sec = 1;
 * @return {number}
 */
proto.sf.antelope.type.v1.WaitWeight.prototype.getWaitSec = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.WaitWeight} returns this
 */
proto.sf.antelope.type.v1.WaitWeight.prototype.setWaitSec = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 weight = 2;
 * @return {number}
 */
proto.sf.antelope.type.v1.WaitWeight.prototype.getWeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.WaitWeight} returns this
 */
proto.sf.antelope.type.v1.WaitWeight.prototype.setWeight = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.sf.antelope.type.v1.RlimitOp.oneofGroups_ = [[2,3,4,5]];

/**
 * @enum {number}
 */
proto.sf.antelope.type.v1.RlimitOp.KindCase = {
  KIND_NOT_SET: 0,
  STATE: 2,
  CONFIG: 3,
  ACCOUNT_LIMITS: 4,
  ACCOUNT_USAGE: 5
};

/**
 * @return {proto.sf.antelope.type.v1.RlimitOp.KindCase}
 */
proto.sf.antelope.type.v1.RlimitOp.prototype.getKindCase = function() {
  return /** @type {proto.sf.antelope.type.v1.RlimitOp.KindCase} */(jspb.Message.computeOneofCase(this, proto.sf.antelope.type.v1.RlimitOp.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.RlimitOp.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.RlimitOp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.RlimitOp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.RlimitOp.toObject = function(includeInstance, msg) {
  var f, obj = {
    operation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    state: (f = msg.getState()) && proto.sf.antelope.type.v1.RlimitState.toObject(includeInstance, f),
    config: (f = msg.getConfig()) && proto.sf.antelope.type.v1.RlimitConfig.toObject(includeInstance, f),
    accountLimits: (f = msg.getAccountLimits()) && proto.sf.antelope.type.v1.RlimitAccountLimits.toObject(includeInstance, f),
    accountUsage: (f = msg.getAccountUsage()) && proto.sf.antelope.type.v1.RlimitAccountUsage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.RlimitOp}
 */
proto.sf.antelope.type.v1.RlimitOp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.RlimitOp;
  return proto.sf.antelope.type.v1.RlimitOp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.RlimitOp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.RlimitOp}
 */
proto.sf.antelope.type.v1.RlimitOp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.sf.antelope.type.v1.RlimitOp.Operation} */ (reader.readEnum());
      msg.setOperation(value);
      break;
    case 2:
      var value = new proto.sf.antelope.type.v1.RlimitState;
      reader.readMessage(value,proto.sf.antelope.type.v1.RlimitState.deserializeBinaryFromReader);
      msg.setState(value);
      break;
    case 3:
      var value = new proto.sf.antelope.type.v1.RlimitConfig;
      reader.readMessage(value,proto.sf.antelope.type.v1.RlimitConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 4:
      var value = new proto.sf.antelope.type.v1.RlimitAccountLimits;
      reader.readMessage(value,proto.sf.antelope.type.v1.RlimitAccountLimits.deserializeBinaryFromReader);
      msg.setAccountLimits(value);
      break;
    case 5:
      var value = new proto.sf.antelope.type.v1.RlimitAccountUsage;
      reader.readMessage(value,proto.sf.antelope.type.v1.RlimitAccountUsage.deserializeBinaryFromReader);
      msg.setAccountUsage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.RlimitOp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.RlimitOp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.RlimitOp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.RlimitOp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperation();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getState();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sf.antelope.type.v1.RlimitState.serializeBinaryToWriter
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.sf.antelope.type.v1.RlimitConfig.serializeBinaryToWriter
    );
  }
  f = message.getAccountLimits();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.sf.antelope.type.v1.RlimitAccountLimits.serializeBinaryToWriter
    );
  }
  f = message.getAccountUsage();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.sf.antelope.type.v1.RlimitAccountUsage.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.sf.antelope.type.v1.RlimitOp.Operation = {
  OPERATION_UNKNOWN: 0,
  OPERATION_INSERT: 1,
  OPERATION_UPDATE: 2
};

/**
 * optional Operation operation = 1;
 * @return {!proto.sf.antelope.type.v1.RlimitOp.Operation}
 */
proto.sf.antelope.type.v1.RlimitOp.prototype.getOperation = function() {
  return /** @type {!proto.sf.antelope.type.v1.RlimitOp.Operation} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.sf.antelope.type.v1.RlimitOp.Operation} value
 * @return {!proto.sf.antelope.type.v1.RlimitOp} returns this
 */
proto.sf.antelope.type.v1.RlimitOp.prototype.setOperation = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional RlimitState state = 2;
 * @return {?proto.sf.antelope.type.v1.RlimitState}
 */
proto.sf.antelope.type.v1.RlimitOp.prototype.getState = function() {
  return /** @type{?proto.sf.antelope.type.v1.RlimitState} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.RlimitState, 2));
};


/**
 * @param {?proto.sf.antelope.type.v1.RlimitState|undefined} value
 * @return {!proto.sf.antelope.type.v1.RlimitOp} returns this
*/
proto.sf.antelope.type.v1.RlimitOp.prototype.setState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.sf.antelope.type.v1.RlimitOp.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.RlimitOp} returns this
 */
proto.sf.antelope.type.v1.RlimitOp.prototype.clearState = function() {
  return this.setState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.RlimitOp.prototype.hasState = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional RlimitConfig config = 3;
 * @return {?proto.sf.antelope.type.v1.RlimitConfig}
 */
proto.sf.antelope.type.v1.RlimitOp.prototype.getConfig = function() {
  return /** @type{?proto.sf.antelope.type.v1.RlimitConfig} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.RlimitConfig, 3));
};


/**
 * @param {?proto.sf.antelope.type.v1.RlimitConfig|undefined} value
 * @return {!proto.sf.antelope.type.v1.RlimitOp} returns this
*/
proto.sf.antelope.type.v1.RlimitOp.prototype.setConfig = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.sf.antelope.type.v1.RlimitOp.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.RlimitOp} returns this
 */
proto.sf.antelope.type.v1.RlimitOp.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.RlimitOp.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional RlimitAccountLimits account_limits = 4;
 * @return {?proto.sf.antelope.type.v1.RlimitAccountLimits}
 */
proto.sf.antelope.type.v1.RlimitOp.prototype.getAccountLimits = function() {
  return /** @type{?proto.sf.antelope.type.v1.RlimitAccountLimits} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.RlimitAccountLimits, 4));
};


/**
 * @param {?proto.sf.antelope.type.v1.RlimitAccountLimits|undefined} value
 * @return {!proto.sf.antelope.type.v1.RlimitOp} returns this
*/
proto.sf.antelope.type.v1.RlimitOp.prototype.setAccountLimits = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.sf.antelope.type.v1.RlimitOp.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.RlimitOp} returns this
 */
proto.sf.antelope.type.v1.RlimitOp.prototype.clearAccountLimits = function() {
  return this.setAccountLimits(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.RlimitOp.prototype.hasAccountLimits = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional RlimitAccountUsage account_usage = 5;
 * @return {?proto.sf.antelope.type.v1.RlimitAccountUsage}
 */
proto.sf.antelope.type.v1.RlimitOp.prototype.getAccountUsage = function() {
  return /** @type{?proto.sf.antelope.type.v1.RlimitAccountUsage} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.RlimitAccountUsage, 5));
};


/**
 * @param {?proto.sf.antelope.type.v1.RlimitAccountUsage|undefined} value
 * @return {!proto.sf.antelope.type.v1.RlimitOp} returns this
*/
proto.sf.antelope.type.v1.RlimitOp.prototype.setAccountUsage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.sf.antelope.type.v1.RlimitOp.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.RlimitOp} returns this
 */
proto.sf.antelope.type.v1.RlimitOp.prototype.clearAccountUsage = function() {
  return this.setAccountUsage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.RlimitOp.prototype.hasAccountUsage = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.RlimitState.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.RlimitState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.RlimitState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.RlimitState.toObject = function(includeInstance, msg) {
  var f, obj = {
    averageBlockNetUsage: (f = msg.getAverageBlockNetUsage()) && proto.sf.antelope.type.v1.UsageAccumulator.toObject(includeInstance, f),
    averageBlockCpuUsage: (f = msg.getAverageBlockCpuUsage()) && proto.sf.antelope.type.v1.UsageAccumulator.toObject(includeInstance, f),
    pendingNetUsage: jspb.Message.getFieldWithDefault(msg, 3, "0"),
    pendingCpuUsage: jspb.Message.getFieldWithDefault(msg, 4, "0"),
    totalNetWeight: jspb.Message.getFieldWithDefault(msg, 5, "0"),
    totalCpuWeight: jspb.Message.getFieldWithDefault(msg, 6, "0"),
    totalRamBytes: jspb.Message.getFieldWithDefault(msg, 7, "0"),
    virtualNetLimit: jspb.Message.getFieldWithDefault(msg, 8, "0"),
    virtualCpuLimit: jspb.Message.getFieldWithDefault(msg, 9, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.RlimitState}
 */
proto.sf.antelope.type.v1.RlimitState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.RlimitState;
  return proto.sf.antelope.type.v1.RlimitState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.RlimitState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.RlimitState}
 */
proto.sf.antelope.type.v1.RlimitState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sf.antelope.type.v1.UsageAccumulator;
      reader.readMessage(value,proto.sf.antelope.type.v1.UsageAccumulator.deserializeBinaryFromReader);
      msg.setAverageBlockNetUsage(value);
      break;
    case 2:
      var value = new proto.sf.antelope.type.v1.UsageAccumulator;
      reader.readMessage(value,proto.sf.antelope.type.v1.UsageAccumulator.deserializeBinaryFromReader);
      msg.setAverageBlockCpuUsage(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setPendingNetUsage(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setPendingCpuUsage(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setTotalNetWeight(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setTotalCpuWeight(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setTotalRamBytes(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setVirtualNetLimit(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setVirtualCpuLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.RlimitState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.RlimitState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.RlimitState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.RlimitState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAverageBlockNetUsage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sf.antelope.type.v1.UsageAccumulator.serializeBinaryToWriter
    );
  }
  f = message.getAverageBlockCpuUsage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sf.antelope.type.v1.UsageAccumulator.serializeBinaryToWriter
    );
  }
  f = message.getPendingNetUsage();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      3,
      f
    );
  }
  f = message.getPendingCpuUsage();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      4,
      f
    );
  }
  f = message.getTotalNetWeight();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      5,
      f
    );
  }
  f = message.getTotalCpuWeight();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      6,
      f
    );
  }
  f = message.getTotalRamBytes();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      7,
      f
    );
  }
  f = message.getVirtualNetLimit();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      8,
      f
    );
  }
  f = message.getVirtualCpuLimit();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      9,
      f
    );
  }
};


/**
 * optional UsageAccumulator average_block_net_usage = 1;
 * @return {?proto.sf.antelope.type.v1.UsageAccumulator}
 */
proto.sf.antelope.type.v1.RlimitState.prototype.getAverageBlockNetUsage = function() {
  return /** @type{?proto.sf.antelope.type.v1.UsageAccumulator} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.UsageAccumulator, 1));
};


/**
 * @param {?proto.sf.antelope.type.v1.UsageAccumulator|undefined} value
 * @return {!proto.sf.antelope.type.v1.RlimitState} returns this
*/
proto.sf.antelope.type.v1.RlimitState.prototype.setAverageBlockNetUsage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.RlimitState} returns this
 */
proto.sf.antelope.type.v1.RlimitState.prototype.clearAverageBlockNetUsage = function() {
  return this.setAverageBlockNetUsage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.RlimitState.prototype.hasAverageBlockNetUsage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional UsageAccumulator average_block_cpu_usage = 2;
 * @return {?proto.sf.antelope.type.v1.UsageAccumulator}
 */
proto.sf.antelope.type.v1.RlimitState.prototype.getAverageBlockCpuUsage = function() {
  return /** @type{?proto.sf.antelope.type.v1.UsageAccumulator} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.UsageAccumulator, 2));
};


/**
 * @param {?proto.sf.antelope.type.v1.UsageAccumulator|undefined} value
 * @return {!proto.sf.antelope.type.v1.RlimitState} returns this
*/
proto.sf.antelope.type.v1.RlimitState.prototype.setAverageBlockCpuUsage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.RlimitState} returns this
 */
proto.sf.antelope.type.v1.RlimitState.prototype.clearAverageBlockCpuUsage = function() {
  return this.setAverageBlockCpuUsage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.RlimitState.prototype.hasAverageBlockCpuUsage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 pending_net_usage = 3;
 * @return {string}
 */
proto.sf.antelope.type.v1.RlimitState.prototype.getPendingNetUsage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, "0"));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.RlimitState} returns this
 */
proto.sf.antelope.type.v1.RlimitState.prototype.setPendingNetUsage = function(value) {
  return jspb.Message.setProto3StringIntField(this, 3, value);
};


/**
 * optional uint64 pending_cpu_usage = 4;
 * @return {string}
 */
proto.sf.antelope.type.v1.RlimitState.prototype.getPendingCpuUsage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, "0"));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.RlimitState} returns this
 */
proto.sf.antelope.type.v1.RlimitState.prototype.setPendingCpuUsage = function(value) {
  return jspb.Message.setProto3StringIntField(this, 4, value);
};


/**
 * optional uint64 total_net_weight = 5;
 * @return {string}
 */
proto.sf.antelope.type.v1.RlimitState.prototype.getTotalNetWeight = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, "0"));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.RlimitState} returns this
 */
proto.sf.antelope.type.v1.RlimitState.prototype.setTotalNetWeight = function(value) {
  return jspb.Message.setProto3StringIntField(this, 5, value);
};


/**
 * optional uint64 total_cpu_weight = 6;
 * @return {string}
 */
proto.sf.antelope.type.v1.RlimitState.prototype.getTotalCpuWeight = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, "0"));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.RlimitState} returns this
 */
proto.sf.antelope.type.v1.RlimitState.prototype.setTotalCpuWeight = function(value) {
  return jspb.Message.setProto3StringIntField(this, 6, value);
};


/**
 * optional uint64 total_ram_bytes = 7;
 * @return {string}
 */
proto.sf.antelope.type.v1.RlimitState.prototype.getTotalRamBytes = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, "0"));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.RlimitState} returns this
 */
proto.sf.antelope.type.v1.RlimitState.prototype.setTotalRamBytes = function(value) {
  return jspb.Message.setProto3StringIntField(this, 7, value);
};


/**
 * optional uint64 virtual_net_limit = 8;
 * @return {string}
 */
proto.sf.antelope.type.v1.RlimitState.prototype.getVirtualNetLimit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, "0"));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.RlimitState} returns this
 */
proto.sf.antelope.type.v1.RlimitState.prototype.setVirtualNetLimit = function(value) {
  return jspb.Message.setProto3StringIntField(this, 8, value);
};


/**
 * optional uint64 virtual_cpu_limit = 9;
 * @return {string}
 */
proto.sf.antelope.type.v1.RlimitState.prototype.getVirtualCpuLimit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, "0"));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.RlimitState} returns this
 */
proto.sf.antelope.type.v1.RlimitState.prototype.setVirtualCpuLimit = function(value) {
  return jspb.Message.setProto3StringIntField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.RlimitConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.RlimitConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.RlimitConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.RlimitConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    cpuLimitParameters: (f = msg.getCpuLimitParameters()) && proto.sf.antelope.type.v1.ElasticLimitParameters.toObject(includeInstance, f),
    netLimitParameters: (f = msg.getNetLimitParameters()) && proto.sf.antelope.type.v1.ElasticLimitParameters.toObject(includeInstance, f),
    accountCpuUsageAverageWindow: jspb.Message.getFieldWithDefault(msg, 3, 0),
    accountNetUsageAverageWindow: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.RlimitConfig}
 */
proto.sf.antelope.type.v1.RlimitConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.RlimitConfig;
  return proto.sf.antelope.type.v1.RlimitConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.RlimitConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.RlimitConfig}
 */
proto.sf.antelope.type.v1.RlimitConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sf.antelope.type.v1.ElasticLimitParameters;
      reader.readMessage(value,proto.sf.antelope.type.v1.ElasticLimitParameters.deserializeBinaryFromReader);
      msg.setCpuLimitParameters(value);
      break;
    case 2:
      var value = new proto.sf.antelope.type.v1.ElasticLimitParameters;
      reader.readMessage(value,proto.sf.antelope.type.v1.ElasticLimitParameters.deserializeBinaryFromReader);
      msg.setNetLimitParameters(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAccountCpuUsageAverageWindow(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAccountNetUsageAverageWindow(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.RlimitConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.RlimitConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.RlimitConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.RlimitConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCpuLimitParameters();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sf.antelope.type.v1.ElasticLimitParameters.serializeBinaryToWriter
    );
  }
  f = message.getNetLimitParameters();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sf.antelope.type.v1.ElasticLimitParameters.serializeBinaryToWriter
    );
  }
  f = message.getAccountCpuUsageAverageWindow();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getAccountNetUsageAverageWindow();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional ElasticLimitParameters cpu_limit_parameters = 1;
 * @return {?proto.sf.antelope.type.v1.ElasticLimitParameters}
 */
proto.sf.antelope.type.v1.RlimitConfig.prototype.getCpuLimitParameters = function() {
  return /** @type{?proto.sf.antelope.type.v1.ElasticLimitParameters} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.ElasticLimitParameters, 1));
};


/**
 * @param {?proto.sf.antelope.type.v1.ElasticLimitParameters|undefined} value
 * @return {!proto.sf.antelope.type.v1.RlimitConfig} returns this
*/
proto.sf.antelope.type.v1.RlimitConfig.prototype.setCpuLimitParameters = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.RlimitConfig} returns this
 */
proto.sf.antelope.type.v1.RlimitConfig.prototype.clearCpuLimitParameters = function() {
  return this.setCpuLimitParameters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.RlimitConfig.prototype.hasCpuLimitParameters = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ElasticLimitParameters net_limit_parameters = 2;
 * @return {?proto.sf.antelope.type.v1.ElasticLimitParameters}
 */
proto.sf.antelope.type.v1.RlimitConfig.prototype.getNetLimitParameters = function() {
  return /** @type{?proto.sf.antelope.type.v1.ElasticLimitParameters} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.ElasticLimitParameters, 2));
};


/**
 * @param {?proto.sf.antelope.type.v1.ElasticLimitParameters|undefined} value
 * @return {!proto.sf.antelope.type.v1.RlimitConfig} returns this
*/
proto.sf.antelope.type.v1.RlimitConfig.prototype.setNetLimitParameters = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.RlimitConfig} returns this
 */
proto.sf.antelope.type.v1.RlimitConfig.prototype.clearNetLimitParameters = function() {
  return this.setNetLimitParameters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.RlimitConfig.prototype.hasNetLimitParameters = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 account_cpu_usage_average_window = 3;
 * @return {number}
 */
proto.sf.antelope.type.v1.RlimitConfig.prototype.getAccountCpuUsageAverageWindow = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.RlimitConfig} returns this
 */
proto.sf.antelope.type.v1.RlimitConfig.prototype.setAccountCpuUsageAverageWindow = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 account_net_usage_average_window = 4;
 * @return {number}
 */
proto.sf.antelope.type.v1.RlimitConfig.prototype.getAccountNetUsageAverageWindow = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.RlimitConfig} returns this
 */
proto.sf.antelope.type.v1.RlimitConfig.prototype.setAccountNetUsageAverageWindow = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.RlimitAccountLimits.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.RlimitAccountLimits.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.RlimitAccountLimits} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.RlimitAccountLimits.toObject = function(includeInstance, msg) {
  var f, obj = {
    owner: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pending: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    netWeight: jspb.Message.getFieldWithDefault(msg, 3, 0),
    cpuWeight: jspb.Message.getFieldWithDefault(msg, 4, 0),
    ramBytes: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.RlimitAccountLimits}
 */
proto.sf.antelope.type.v1.RlimitAccountLimits.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.RlimitAccountLimits;
  return proto.sf.antelope.type.v1.RlimitAccountLimits.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.RlimitAccountLimits} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.RlimitAccountLimits}
 */
proto.sf.antelope.type.v1.RlimitAccountLimits.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPending(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNetWeight(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCpuWeight(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRamBytes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.RlimitAccountLimits.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.RlimitAccountLimits.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.RlimitAccountLimits} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.RlimitAccountLimits.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwner();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPending();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getNetWeight();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getCpuWeight();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getRamBytes();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
};


/**
 * optional string owner = 1;
 * @return {string}
 */
proto.sf.antelope.type.v1.RlimitAccountLimits.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.RlimitAccountLimits} returns this
 */
proto.sf.antelope.type.v1.RlimitAccountLimits.prototype.setOwner = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool pending = 2;
 * @return {boolean}
 */
proto.sf.antelope.type.v1.RlimitAccountLimits.prototype.getPending = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sf.antelope.type.v1.RlimitAccountLimits} returns this
 */
proto.sf.antelope.type.v1.RlimitAccountLimits.prototype.setPending = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional int64 net_weight = 3;
 * @return {number}
 */
proto.sf.antelope.type.v1.RlimitAccountLimits.prototype.getNetWeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.RlimitAccountLimits} returns this
 */
proto.sf.antelope.type.v1.RlimitAccountLimits.prototype.setNetWeight = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 cpu_weight = 4;
 * @return {number}
 */
proto.sf.antelope.type.v1.RlimitAccountLimits.prototype.getCpuWeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.RlimitAccountLimits} returns this
 */
proto.sf.antelope.type.v1.RlimitAccountLimits.prototype.setCpuWeight = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 ram_bytes = 5;
 * @return {number}
 */
proto.sf.antelope.type.v1.RlimitAccountLimits.prototype.getRamBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.RlimitAccountLimits} returns this
 */
proto.sf.antelope.type.v1.RlimitAccountLimits.prototype.setRamBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.RlimitAccountUsage.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.RlimitAccountUsage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.RlimitAccountUsage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.RlimitAccountUsage.toObject = function(includeInstance, msg) {
  var f, obj = {
    owner: jspb.Message.getFieldWithDefault(msg, 1, ""),
    netUsage: (f = msg.getNetUsage()) && proto.sf.antelope.type.v1.UsageAccumulator.toObject(includeInstance, f),
    cpuUsage: (f = msg.getCpuUsage()) && proto.sf.antelope.type.v1.UsageAccumulator.toObject(includeInstance, f),
    ramUsage: jspb.Message.getFieldWithDefault(msg, 4, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.RlimitAccountUsage}
 */
proto.sf.antelope.type.v1.RlimitAccountUsage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.RlimitAccountUsage;
  return proto.sf.antelope.type.v1.RlimitAccountUsage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.RlimitAccountUsage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.RlimitAccountUsage}
 */
proto.sf.antelope.type.v1.RlimitAccountUsage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 2:
      var value = new proto.sf.antelope.type.v1.UsageAccumulator;
      reader.readMessage(value,proto.sf.antelope.type.v1.UsageAccumulator.deserializeBinaryFromReader);
      msg.setNetUsage(value);
      break;
    case 3:
      var value = new proto.sf.antelope.type.v1.UsageAccumulator;
      reader.readMessage(value,proto.sf.antelope.type.v1.UsageAccumulator.deserializeBinaryFromReader);
      msg.setCpuUsage(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setRamUsage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.RlimitAccountUsage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.RlimitAccountUsage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.RlimitAccountUsage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.RlimitAccountUsage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwner();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNetUsage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sf.antelope.type.v1.UsageAccumulator.serializeBinaryToWriter
    );
  }
  f = message.getCpuUsage();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.sf.antelope.type.v1.UsageAccumulator.serializeBinaryToWriter
    );
  }
  f = message.getRamUsage();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      4,
      f
    );
  }
};


/**
 * optional string owner = 1;
 * @return {string}
 */
proto.sf.antelope.type.v1.RlimitAccountUsage.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.RlimitAccountUsage} returns this
 */
proto.sf.antelope.type.v1.RlimitAccountUsage.prototype.setOwner = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional UsageAccumulator net_usage = 2;
 * @return {?proto.sf.antelope.type.v1.UsageAccumulator}
 */
proto.sf.antelope.type.v1.RlimitAccountUsage.prototype.getNetUsage = function() {
  return /** @type{?proto.sf.antelope.type.v1.UsageAccumulator} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.UsageAccumulator, 2));
};


/**
 * @param {?proto.sf.antelope.type.v1.UsageAccumulator|undefined} value
 * @return {!proto.sf.antelope.type.v1.RlimitAccountUsage} returns this
*/
proto.sf.antelope.type.v1.RlimitAccountUsage.prototype.setNetUsage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.RlimitAccountUsage} returns this
 */
proto.sf.antelope.type.v1.RlimitAccountUsage.prototype.clearNetUsage = function() {
  return this.setNetUsage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.RlimitAccountUsage.prototype.hasNetUsage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional UsageAccumulator cpu_usage = 3;
 * @return {?proto.sf.antelope.type.v1.UsageAccumulator}
 */
proto.sf.antelope.type.v1.RlimitAccountUsage.prototype.getCpuUsage = function() {
  return /** @type{?proto.sf.antelope.type.v1.UsageAccumulator} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.UsageAccumulator, 3));
};


/**
 * @param {?proto.sf.antelope.type.v1.UsageAccumulator|undefined} value
 * @return {!proto.sf.antelope.type.v1.RlimitAccountUsage} returns this
*/
proto.sf.antelope.type.v1.RlimitAccountUsage.prototype.setCpuUsage = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.RlimitAccountUsage} returns this
 */
proto.sf.antelope.type.v1.RlimitAccountUsage.prototype.clearCpuUsage = function() {
  return this.setCpuUsage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.RlimitAccountUsage.prototype.hasCpuUsage = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint64 ram_usage = 4;
 * @return {string}
 */
proto.sf.antelope.type.v1.RlimitAccountUsage.prototype.getRamUsage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, "0"));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.RlimitAccountUsage} returns this
 */
proto.sf.antelope.type.v1.RlimitAccountUsage.prototype.setRamUsage = function(value) {
  return jspb.Message.setProto3StringIntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.UsageAccumulator.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.UsageAccumulator.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.UsageAccumulator} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.UsageAccumulator.toObject = function(includeInstance, msg) {
  var f, obj = {
    lastOrdinal: jspb.Message.getFieldWithDefault(msg, 1, 0),
    valueEx: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    consumed: jspb.Message.getFieldWithDefault(msg, 3, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.UsageAccumulator}
 */
proto.sf.antelope.type.v1.UsageAccumulator.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.UsageAccumulator;
  return proto.sf.antelope.type.v1.UsageAccumulator.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.UsageAccumulator} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.UsageAccumulator}
 */
proto.sf.antelope.type.v1.UsageAccumulator.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLastOrdinal(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setValueEx(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setConsumed(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.UsageAccumulator.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.UsageAccumulator.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.UsageAccumulator} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.UsageAccumulator.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLastOrdinal();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getValueEx();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      2,
      f
    );
  }
  f = message.getConsumed();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      3,
      f
    );
  }
};


/**
 * optional uint32 last_ordinal = 1;
 * @return {number}
 */
proto.sf.antelope.type.v1.UsageAccumulator.prototype.getLastOrdinal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.UsageAccumulator} returns this
 */
proto.sf.antelope.type.v1.UsageAccumulator.prototype.setLastOrdinal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 value_ex = 2;
 * @return {string}
 */
proto.sf.antelope.type.v1.UsageAccumulator.prototype.getValueEx = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.UsageAccumulator} returns this
 */
proto.sf.antelope.type.v1.UsageAccumulator.prototype.setValueEx = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional uint64 consumed = 3;
 * @return {string}
 */
proto.sf.antelope.type.v1.UsageAccumulator.prototype.getConsumed = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, "0"));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.UsageAccumulator} returns this
 */
proto.sf.antelope.type.v1.UsageAccumulator.prototype.setConsumed = function(value) {
  return jspb.Message.setProto3StringIntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.ElasticLimitParameters.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.ElasticLimitParameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.ElasticLimitParameters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.ElasticLimitParameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    target: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    max: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    periods: jspb.Message.getFieldWithDefault(msg, 3, 0),
    maxMultiplier: jspb.Message.getFieldWithDefault(msg, 4, 0),
    contractRate: (f = msg.getContractRate()) && proto.sf.antelope.type.v1.Ratio.toObject(includeInstance, f),
    expandRate: (f = msg.getExpandRate()) && proto.sf.antelope.type.v1.Ratio.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.ElasticLimitParameters}
 */
proto.sf.antelope.type.v1.ElasticLimitParameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.ElasticLimitParameters;
  return proto.sf.antelope.type.v1.ElasticLimitParameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.ElasticLimitParameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.ElasticLimitParameters}
 */
proto.sf.antelope.type.v1.ElasticLimitParameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setTarget(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setMax(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPeriods(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaxMultiplier(value);
      break;
    case 5:
      var value = new proto.sf.antelope.type.v1.Ratio;
      reader.readMessage(value,proto.sf.antelope.type.v1.Ratio.deserializeBinaryFromReader);
      msg.setContractRate(value);
      break;
    case 6:
      var value = new proto.sf.antelope.type.v1.Ratio;
      reader.readMessage(value,proto.sf.antelope.type.v1.Ratio.deserializeBinaryFromReader);
      msg.setExpandRate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.ElasticLimitParameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.ElasticLimitParameters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.ElasticLimitParameters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.ElasticLimitParameters.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTarget();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getMax();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      2,
      f
    );
  }
  f = message.getPeriods();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getMaxMultiplier();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getContractRate();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.sf.antelope.type.v1.Ratio.serializeBinaryToWriter
    );
  }
  f = message.getExpandRate();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.sf.antelope.type.v1.Ratio.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 target = 1;
 * @return {string}
 */
proto.sf.antelope.type.v1.ElasticLimitParameters.prototype.getTarget = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.ElasticLimitParameters} returns this
 */
proto.sf.antelope.type.v1.ElasticLimitParameters.prototype.setTarget = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional uint64 max = 2;
 * @return {string}
 */
proto.sf.antelope.type.v1.ElasticLimitParameters.prototype.getMax = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.ElasticLimitParameters} returns this
 */
proto.sf.antelope.type.v1.ElasticLimitParameters.prototype.setMax = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional uint32 periods = 3;
 * @return {number}
 */
proto.sf.antelope.type.v1.ElasticLimitParameters.prototype.getPeriods = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.ElasticLimitParameters} returns this
 */
proto.sf.antelope.type.v1.ElasticLimitParameters.prototype.setPeriods = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 max_multiplier = 4;
 * @return {number}
 */
proto.sf.antelope.type.v1.ElasticLimitParameters.prototype.getMaxMultiplier = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.ElasticLimitParameters} returns this
 */
proto.sf.antelope.type.v1.ElasticLimitParameters.prototype.setMaxMultiplier = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional Ratio contract_rate = 5;
 * @return {?proto.sf.antelope.type.v1.Ratio}
 */
proto.sf.antelope.type.v1.ElasticLimitParameters.prototype.getContractRate = function() {
  return /** @type{?proto.sf.antelope.type.v1.Ratio} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.Ratio, 5));
};


/**
 * @param {?proto.sf.antelope.type.v1.Ratio|undefined} value
 * @return {!proto.sf.antelope.type.v1.ElasticLimitParameters} returns this
*/
proto.sf.antelope.type.v1.ElasticLimitParameters.prototype.setContractRate = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.ElasticLimitParameters} returns this
 */
proto.sf.antelope.type.v1.ElasticLimitParameters.prototype.clearContractRate = function() {
  return this.setContractRate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.ElasticLimitParameters.prototype.hasContractRate = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Ratio expand_rate = 6;
 * @return {?proto.sf.antelope.type.v1.Ratio}
 */
proto.sf.antelope.type.v1.ElasticLimitParameters.prototype.getExpandRate = function() {
  return /** @type{?proto.sf.antelope.type.v1.Ratio} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.Ratio, 6));
};


/**
 * @param {?proto.sf.antelope.type.v1.Ratio|undefined} value
 * @return {!proto.sf.antelope.type.v1.ElasticLimitParameters} returns this
*/
proto.sf.antelope.type.v1.ElasticLimitParameters.prototype.setExpandRate = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.ElasticLimitParameters} returns this
 */
proto.sf.antelope.type.v1.ElasticLimitParameters.prototype.clearExpandRate = function() {
  return this.setExpandRate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.ElasticLimitParameters.prototype.hasExpandRate = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.Ratio.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.Ratio.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.Ratio} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.Ratio.toObject = function(includeInstance, msg) {
  var f, obj = {
    numerator: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    denominator: jspb.Message.getFieldWithDefault(msg, 2, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.Ratio}
 */
proto.sf.antelope.type.v1.Ratio.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.Ratio;
  return proto.sf.antelope.type.v1.Ratio.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.Ratio} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.Ratio}
 */
proto.sf.antelope.type.v1.Ratio.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setNumerator(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setDenominator(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.Ratio.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.Ratio.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.Ratio} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.Ratio.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNumerator();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getDenominator();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      2,
      f
    );
  }
};


/**
 * optional uint64 numerator = 1;
 * @return {string}
 */
proto.sf.antelope.type.v1.Ratio.prototype.getNumerator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.Ratio} returns this
 */
proto.sf.antelope.type.v1.Ratio.prototype.setNumerator = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional uint64 denominator = 2;
 * @return {string}
 */
proto.sf.antelope.type.v1.Ratio.prototype.getDenominator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.Ratio} returns this
 */
proto.sf.antelope.type.v1.Ratio.prototype.setDenominator = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sf.antelope.type.v1.Exception.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.Exception.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.Exception.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.Exception} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.Exception.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    message: jspb.Message.getFieldWithDefault(msg, 3, ""),
    stackList: jspb.Message.toObjectList(msg.getStackList(),
    proto.sf.antelope.type.v1.Exception.LogMessage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.Exception}
 */
proto.sf.antelope.type.v1.Exception.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.Exception;
  return proto.sf.antelope.type.v1.Exception.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.Exception} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.Exception}
 */
proto.sf.antelope.type.v1.Exception.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 4:
      var value = new proto.sf.antelope.type.v1.Exception.LogMessage;
      reader.readMessage(value,proto.sf.antelope.type.v1.Exception.LogMessage.deserializeBinaryFromReader);
      msg.addStack(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.Exception.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.Exception.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.Exception} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.Exception.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getStackList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.sf.antelope.type.v1.Exception.LogMessage.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.Exception.LogMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.Exception.LogMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.Exception.LogMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.Exception.LogMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    context: (f = msg.getContext()) && proto.sf.antelope.type.v1.Exception.LogContext.toObject(includeInstance, f),
    format: jspb.Message.getFieldWithDefault(msg, 2, ""),
    data: msg.getData_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.Exception.LogMessage}
 */
proto.sf.antelope.type.v1.Exception.LogMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.Exception.LogMessage;
  return proto.sf.antelope.type.v1.Exception.LogMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.Exception.LogMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.Exception.LogMessage}
 */
proto.sf.antelope.type.v1.Exception.LogMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sf.antelope.type.v1.Exception.LogContext;
      reader.readMessage(value,proto.sf.antelope.type.v1.Exception.LogContext.deserializeBinaryFromReader);
      msg.setContext(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFormat(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.Exception.LogMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.Exception.LogMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.Exception.LogMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.Exception.LogMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContext();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sf.antelope.type.v1.Exception.LogContext.serializeBinaryToWriter
    );
  }
  f = message.getFormat();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
};


/**
 * optional LogContext context = 1;
 * @return {?proto.sf.antelope.type.v1.Exception.LogContext}
 */
proto.sf.antelope.type.v1.Exception.LogMessage.prototype.getContext = function() {
  return /** @type{?proto.sf.antelope.type.v1.Exception.LogContext} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.Exception.LogContext, 1));
};


/**
 * @param {?proto.sf.antelope.type.v1.Exception.LogContext|undefined} value
 * @return {!proto.sf.antelope.type.v1.Exception.LogMessage} returns this
*/
proto.sf.antelope.type.v1.Exception.LogMessage.prototype.setContext = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.Exception.LogMessage} returns this
 */
proto.sf.antelope.type.v1.Exception.LogMessage.prototype.clearContext = function() {
  return this.setContext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.Exception.LogMessage.prototype.hasContext = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string format = 2;
 * @return {string}
 */
proto.sf.antelope.type.v1.Exception.LogMessage.prototype.getFormat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.Exception.LogMessage} returns this
 */
proto.sf.antelope.type.v1.Exception.LogMessage.prototype.setFormat = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bytes data = 4;
 * @return {!(string|Uint8Array)}
 */
proto.sf.antelope.type.v1.Exception.LogMessage.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes data = 4;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.sf.antelope.type.v1.Exception.LogMessage.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.Exception.LogMessage.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sf.antelope.type.v1.Exception.LogMessage} returns this
 */
proto.sf.antelope.type.v1.Exception.LogMessage.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.Exception.LogContext.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.Exception.LogContext.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.Exception.LogContext} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.Exception.LogContext.toObject = function(includeInstance, msg) {
  var f, obj = {
    level: jspb.Message.getFieldWithDefault(msg, 1, ""),
    file: jspb.Message.getFieldWithDefault(msg, 2, ""),
    line: jspb.Message.getFieldWithDefault(msg, 3, 0),
    method: jspb.Message.getFieldWithDefault(msg, 4, ""),
    hostname: jspb.Message.getFieldWithDefault(msg, 5, ""),
    threadName: jspb.Message.getFieldWithDefault(msg, 6, ""),
    timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    context: (f = msg.getContext()) && proto.sf.antelope.type.v1.Exception.LogContext.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.Exception.LogContext}
 */
proto.sf.antelope.type.v1.Exception.LogContext.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.Exception.LogContext;
  return proto.sf.antelope.type.v1.Exception.LogContext.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.Exception.LogContext} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.Exception.LogContext}
 */
proto.sf.antelope.type.v1.Exception.LogContext.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLevel(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFile(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLine(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMethod(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setHostname(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setThreadName(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 8:
      var value = new proto.sf.antelope.type.v1.Exception.LogContext;
      reader.readMessage(value,proto.sf.antelope.type.v1.Exception.LogContext.deserializeBinaryFromReader);
      msg.setContext(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.Exception.LogContext.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.Exception.LogContext.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.Exception.LogContext} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.Exception.LogContext.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLevel();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFile();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLine();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getMethod();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getHostname();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getThreadName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getContext();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.sf.antelope.type.v1.Exception.LogContext.serializeBinaryToWriter
    );
  }
};


/**
 * optional string level = 1;
 * @return {string}
 */
proto.sf.antelope.type.v1.Exception.LogContext.prototype.getLevel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.Exception.LogContext} returns this
 */
proto.sf.antelope.type.v1.Exception.LogContext.prototype.setLevel = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string file = 2;
 * @return {string}
 */
proto.sf.antelope.type.v1.Exception.LogContext.prototype.getFile = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.Exception.LogContext} returns this
 */
proto.sf.antelope.type.v1.Exception.LogContext.prototype.setFile = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 line = 3;
 * @return {number}
 */
proto.sf.antelope.type.v1.Exception.LogContext.prototype.getLine = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.Exception.LogContext} returns this
 */
proto.sf.antelope.type.v1.Exception.LogContext.prototype.setLine = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string method = 4;
 * @return {string}
 */
proto.sf.antelope.type.v1.Exception.LogContext.prototype.getMethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.Exception.LogContext} returns this
 */
proto.sf.antelope.type.v1.Exception.LogContext.prototype.setMethod = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string hostname = 5;
 * @return {string}
 */
proto.sf.antelope.type.v1.Exception.LogContext.prototype.getHostname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.Exception.LogContext} returns this
 */
proto.sf.antelope.type.v1.Exception.LogContext.prototype.setHostname = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string thread_name = 6;
 * @return {string}
 */
proto.sf.antelope.type.v1.Exception.LogContext.prototype.getThreadName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.Exception.LogContext} returns this
 */
proto.sf.antelope.type.v1.Exception.LogContext.prototype.setThreadName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional google.protobuf.Timestamp timestamp = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.sf.antelope.type.v1.Exception.LogContext.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.sf.antelope.type.v1.Exception.LogContext} returns this
*/
proto.sf.antelope.type.v1.Exception.LogContext.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.Exception.LogContext} returns this
 */
proto.sf.antelope.type.v1.Exception.LogContext.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.Exception.LogContext.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional LogContext context = 8;
 * @return {?proto.sf.antelope.type.v1.Exception.LogContext}
 */
proto.sf.antelope.type.v1.Exception.LogContext.prototype.getContext = function() {
  return /** @type{?proto.sf.antelope.type.v1.Exception.LogContext} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.Exception.LogContext, 8));
};


/**
 * @param {?proto.sf.antelope.type.v1.Exception.LogContext|undefined} value
 * @return {!proto.sf.antelope.type.v1.Exception.LogContext} returns this
*/
proto.sf.antelope.type.v1.Exception.LogContext.prototype.setContext = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.Exception.LogContext} returns this
 */
proto.sf.antelope.type.v1.Exception.LogContext.prototype.clearContext = function() {
  return this.setContext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.Exception.LogContext.prototype.hasContext = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.sf.antelope.type.v1.Exception.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.Exception} returns this
 */
proto.sf.antelope.type.v1.Exception.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.sf.antelope.type.v1.Exception.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.Exception} returns this
 */
proto.sf.antelope.type.v1.Exception.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.sf.antelope.type.v1.Exception.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.Exception} returns this
 */
proto.sf.antelope.type.v1.Exception.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated LogMessage stack = 4;
 * @return {!Array<!proto.sf.antelope.type.v1.Exception.LogMessage>}
 */
proto.sf.antelope.type.v1.Exception.prototype.getStackList = function() {
  return /** @type{!Array<!proto.sf.antelope.type.v1.Exception.LogMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sf.antelope.type.v1.Exception.LogMessage, 4));
};


/**
 * @param {!Array<!proto.sf.antelope.type.v1.Exception.LogMessage>} value
 * @return {!proto.sf.antelope.type.v1.Exception} returns this
*/
proto.sf.antelope.type.v1.Exception.prototype.setStackList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.sf.antelope.type.v1.Exception.LogMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.Exception.LogMessage}
 */
proto.sf.antelope.type.v1.Exception.prototype.addStack = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.sf.antelope.type.v1.Exception.LogMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.Exception} returns this
 */
proto.sf.antelope.type.v1.Exception.prototype.clearStackList = function() {
  return this.setStackList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sf.antelope.type.v1.Feature.repeatedFields_ = [4,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.Feature.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.Feature.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.Feature} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.Feature.toObject = function(includeInstance, msg) {
  var f, obj = {
    featureDigest: jspb.Message.getFieldWithDefault(msg, 1, ""),
    subjectiveRestrictions: (f = msg.getSubjectiveRestrictions()) && proto.sf.antelope.type.v1.SubjectiveRestrictions.toObject(includeInstance, f),
    descriptionDigest: jspb.Message.getFieldWithDefault(msg, 3, ""),
    dependenciesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    protocolFeatureType: jspb.Message.getFieldWithDefault(msg, 5, ""),
    specificationList: jspb.Message.toObjectList(msg.getSpecificationList(),
    proto.sf.antelope.type.v1.Specification.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.Feature}
 */
proto.sf.antelope.type.v1.Feature.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.Feature;
  return proto.sf.antelope.type.v1.Feature.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.Feature} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.Feature}
 */
proto.sf.antelope.type.v1.Feature.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFeatureDigest(value);
      break;
    case 2:
      var value = new proto.sf.antelope.type.v1.SubjectiveRestrictions;
      reader.readMessage(value,proto.sf.antelope.type.v1.SubjectiveRestrictions.deserializeBinaryFromReader);
      msg.setSubjectiveRestrictions(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescriptionDigest(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addDependencies(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setProtocolFeatureType(value);
      break;
    case 6:
      var value = new proto.sf.antelope.type.v1.Specification;
      reader.readMessage(value,proto.sf.antelope.type.v1.Specification.deserializeBinaryFromReader);
      msg.addSpecification(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.Feature.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.Feature.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.Feature} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.Feature.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFeatureDigest();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSubjectiveRestrictions();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sf.antelope.type.v1.SubjectiveRestrictions.serializeBinaryToWriter
    );
  }
  f = message.getDescriptionDigest();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDependenciesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getProtocolFeatureType();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSpecificationList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.sf.antelope.type.v1.Specification.serializeBinaryToWriter
    );
  }
};


/**
 * optional string feature_digest = 1;
 * @return {string}
 */
proto.sf.antelope.type.v1.Feature.prototype.getFeatureDigest = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.Feature} returns this
 */
proto.sf.antelope.type.v1.Feature.prototype.setFeatureDigest = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SubjectiveRestrictions subjective_restrictions = 2;
 * @return {?proto.sf.antelope.type.v1.SubjectiveRestrictions}
 */
proto.sf.antelope.type.v1.Feature.prototype.getSubjectiveRestrictions = function() {
  return /** @type{?proto.sf.antelope.type.v1.SubjectiveRestrictions} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.SubjectiveRestrictions, 2));
};


/**
 * @param {?proto.sf.antelope.type.v1.SubjectiveRestrictions|undefined} value
 * @return {!proto.sf.antelope.type.v1.Feature} returns this
*/
proto.sf.antelope.type.v1.Feature.prototype.setSubjectiveRestrictions = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.Feature} returns this
 */
proto.sf.antelope.type.v1.Feature.prototype.clearSubjectiveRestrictions = function() {
  return this.setSubjectiveRestrictions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.Feature.prototype.hasSubjectiveRestrictions = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string description_digest = 3;
 * @return {string}
 */
proto.sf.antelope.type.v1.Feature.prototype.getDescriptionDigest = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.Feature} returns this
 */
proto.sf.antelope.type.v1.Feature.prototype.setDescriptionDigest = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string dependencies = 4;
 * @return {!Array<string>}
 */
proto.sf.antelope.type.v1.Feature.prototype.getDependenciesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.sf.antelope.type.v1.Feature} returns this
 */
proto.sf.antelope.type.v1.Feature.prototype.setDependenciesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.Feature} returns this
 */
proto.sf.antelope.type.v1.Feature.prototype.addDependencies = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.Feature} returns this
 */
proto.sf.antelope.type.v1.Feature.prototype.clearDependenciesList = function() {
  return this.setDependenciesList([]);
};


/**
 * optional string protocol_feature_type = 5;
 * @return {string}
 */
proto.sf.antelope.type.v1.Feature.prototype.getProtocolFeatureType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.Feature} returns this
 */
proto.sf.antelope.type.v1.Feature.prototype.setProtocolFeatureType = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated Specification specification = 6;
 * @return {!Array<!proto.sf.antelope.type.v1.Specification>}
 */
proto.sf.antelope.type.v1.Feature.prototype.getSpecificationList = function() {
  return /** @type{!Array<!proto.sf.antelope.type.v1.Specification>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sf.antelope.type.v1.Specification, 6));
};


/**
 * @param {!Array<!proto.sf.antelope.type.v1.Specification>} value
 * @return {!proto.sf.antelope.type.v1.Feature} returns this
*/
proto.sf.antelope.type.v1.Feature.prototype.setSpecificationList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.sf.antelope.type.v1.Specification=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sf.antelope.type.v1.Specification}
 */
proto.sf.antelope.type.v1.Feature.prototype.addSpecification = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.sf.antelope.type.v1.Specification, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sf.antelope.type.v1.Feature} returns this
 */
proto.sf.antelope.type.v1.Feature.prototype.clearSpecificationList = function() {
  return this.setSpecificationList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.SubjectiveRestrictions.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.SubjectiveRestrictions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.SubjectiveRestrictions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.SubjectiveRestrictions.toObject = function(includeInstance, msg) {
  var f, obj = {
    enabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    preactivationRequired: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    earliestAllowedActivationTime: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.SubjectiveRestrictions}
 */
proto.sf.antelope.type.v1.SubjectiveRestrictions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.SubjectiveRestrictions;
  return proto.sf.antelope.type.v1.SubjectiveRestrictions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.SubjectiveRestrictions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.SubjectiveRestrictions}
 */
proto.sf.antelope.type.v1.SubjectiveRestrictions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPreactivationRequired(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEarliestAllowedActivationTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.SubjectiveRestrictions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.SubjectiveRestrictions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.SubjectiveRestrictions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.SubjectiveRestrictions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getPreactivationRequired();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getEarliestAllowedActivationTime();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.sf.antelope.type.v1.SubjectiveRestrictions.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sf.antelope.type.v1.SubjectiveRestrictions} returns this
 */
proto.sf.antelope.type.v1.SubjectiveRestrictions.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool preactivation_required = 2;
 * @return {boolean}
 */
proto.sf.antelope.type.v1.SubjectiveRestrictions.prototype.getPreactivationRequired = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sf.antelope.type.v1.SubjectiveRestrictions} returns this
 */
proto.sf.antelope.type.v1.SubjectiveRestrictions.prototype.setPreactivationRequired = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string earliest_allowed_activation_time = 3;
 * @return {string}
 */
proto.sf.antelope.type.v1.SubjectiveRestrictions.prototype.getEarliestAllowedActivationTime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.SubjectiveRestrictions} returns this
 */
proto.sf.antelope.type.v1.SubjectiveRestrictions.prototype.setEarliestAllowedActivationTime = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.Specification.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.Specification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.Specification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.Specification.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.Specification}
 */
proto.sf.antelope.type.v1.Specification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.Specification;
  return proto.sf.antelope.type.v1.Specification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.Specification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.Specification}
 */
proto.sf.antelope.type.v1.Specification.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.Specification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.Specification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.Specification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.Specification.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.sf.antelope.type.v1.Specification.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.Specification} returns this
 */
proto.sf.antelope.type.v1.Specification.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.sf.antelope.type.v1.Specification.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.Specification} returns this
 */
proto.sf.antelope.type.v1.Specification.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.AccountCreationRef.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.AccountCreationRef.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.AccountCreationRef} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.AccountCreationRef.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, ""),
    creator: jspb.Message.getFieldWithDefault(msg, 2, ""),
    blockNum: jspb.Message.getFieldWithDefault(msg, 3, "0"),
    blockId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    blockTime: (f = msg.getBlockTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    transactionId: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.AccountCreationRef}
 */
proto.sf.antelope.type.v1.AccountCreationRef.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.AccountCreationRef;
  return proto.sf.antelope.type.v1.AccountCreationRef.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.AccountCreationRef} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.AccountCreationRef}
 */
proto.sf.antelope.type.v1.AccountCreationRef.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreator(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setBlockNum(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlockId(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setBlockTime(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.AccountCreationRef.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.AccountCreationRef.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.AccountCreationRef} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.AccountCreationRef.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreator();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBlockNum();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      3,
      f
    );
  }
  f = message.getBlockId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getBlockTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTransactionId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string account = 1;
 * @return {string}
 */
proto.sf.antelope.type.v1.AccountCreationRef.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.AccountCreationRef} returns this
 */
proto.sf.antelope.type.v1.AccountCreationRef.prototype.setAccount = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string creator = 2;
 * @return {string}
 */
proto.sf.antelope.type.v1.AccountCreationRef.prototype.getCreator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.AccountCreationRef} returns this
 */
proto.sf.antelope.type.v1.AccountCreationRef.prototype.setCreator = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 block_num = 3;
 * @return {string}
 */
proto.sf.antelope.type.v1.AccountCreationRef.prototype.getBlockNum = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, "0"));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.AccountCreationRef} returns this
 */
proto.sf.antelope.type.v1.AccountCreationRef.prototype.setBlockNum = function(value) {
  return jspb.Message.setProto3StringIntField(this, 3, value);
};


/**
 * optional string block_id = 4;
 * @return {string}
 */
proto.sf.antelope.type.v1.AccountCreationRef.prototype.getBlockId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.AccountCreationRef} returns this
 */
proto.sf.antelope.type.v1.AccountCreationRef.prototype.setBlockId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp block_time = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.sf.antelope.type.v1.AccountCreationRef.prototype.getBlockTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.sf.antelope.type.v1.AccountCreationRef} returns this
*/
proto.sf.antelope.type.v1.AccountCreationRef.prototype.setBlockTime = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.AccountCreationRef} returns this
 */
proto.sf.antelope.type.v1.AccountCreationRef.prototype.clearBlockTime = function() {
  return this.setBlockTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.AccountCreationRef.prototype.hasBlockTime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string transaction_id = 6;
 * @return {string}
 */
proto.sf.antelope.type.v1.AccountCreationRef.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.AccountCreationRef} returns this
 */
proto.sf.antelope.type.v1.AccountCreationRef.prototype.setTransactionId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.HeaderOnlyBlock.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.HeaderOnlyBlock.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.HeaderOnlyBlock} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.HeaderOnlyBlock.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    number: jspb.Message.getFieldWithDefault(msg, 2, 0),
    header: (f = msg.getHeader()) && proto.sf.antelope.type.v1.BlockHeader.toObject(includeInstance, f),
    blockrootMerkle: (f = msg.getBlockrootMerkle()) && proto.sf.antelope.type.v1.BlockRootMerkle.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.HeaderOnlyBlock}
 */
proto.sf.antelope.type.v1.HeaderOnlyBlock.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.HeaderOnlyBlock;
  return proto.sf.antelope.type.v1.HeaderOnlyBlock.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.HeaderOnlyBlock} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.HeaderOnlyBlock}
 */
proto.sf.antelope.type.v1.HeaderOnlyBlock.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumber(value);
      break;
    case 4:
      var value = new proto.sf.antelope.type.v1.BlockHeader;
      reader.readMessage(value,proto.sf.antelope.type.v1.BlockHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 11:
      var value = new proto.sf.antelope.type.v1.BlockRootMerkle;
      reader.readMessage(value,proto.sf.antelope.type.v1.BlockRootMerkle.deserializeBinaryFromReader);
      msg.setBlockrootMerkle(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.HeaderOnlyBlock.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.HeaderOnlyBlock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.HeaderOnlyBlock} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.HeaderOnlyBlock.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNumber();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.sf.antelope.type.v1.BlockHeader.serializeBinaryToWriter
    );
  }
  f = message.getBlockrootMerkle();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.sf.antelope.type.v1.BlockRootMerkle.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.sf.antelope.type.v1.HeaderOnlyBlock.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.HeaderOnlyBlock} returns this
 */
proto.sf.antelope.type.v1.HeaderOnlyBlock.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 number = 2;
 * @return {number}
 */
proto.sf.antelope.type.v1.HeaderOnlyBlock.prototype.getNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sf.antelope.type.v1.HeaderOnlyBlock} returns this
 */
proto.sf.antelope.type.v1.HeaderOnlyBlock.prototype.setNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional BlockHeader header = 4;
 * @return {?proto.sf.antelope.type.v1.BlockHeader}
 */
proto.sf.antelope.type.v1.HeaderOnlyBlock.prototype.getHeader = function() {
  return /** @type{?proto.sf.antelope.type.v1.BlockHeader} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.BlockHeader, 4));
};


/**
 * @param {?proto.sf.antelope.type.v1.BlockHeader|undefined} value
 * @return {!proto.sf.antelope.type.v1.HeaderOnlyBlock} returns this
*/
proto.sf.antelope.type.v1.HeaderOnlyBlock.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.HeaderOnlyBlock} returns this
 */
proto.sf.antelope.type.v1.HeaderOnlyBlock.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.HeaderOnlyBlock.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional BlockRootMerkle blockroot_merkle = 11;
 * @return {?proto.sf.antelope.type.v1.BlockRootMerkle}
 */
proto.sf.antelope.type.v1.HeaderOnlyBlock.prototype.getBlockrootMerkle = function() {
  return /** @type{?proto.sf.antelope.type.v1.BlockRootMerkle} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.BlockRootMerkle, 11));
};


/**
 * @param {?proto.sf.antelope.type.v1.BlockRootMerkle|undefined} value
 * @return {!proto.sf.antelope.type.v1.HeaderOnlyBlock} returns this
*/
proto.sf.antelope.type.v1.HeaderOnlyBlock.prototype.setBlockrootMerkle = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.HeaderOnlyBlock} returns this
 */
proto.sf.antelope.type.v1.HeaderOnlyBlock.prototype.clearBlockrootMerkle = function() {
  return this.setBlockrootMerkle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.HeaderOnlyBlock.prototype.hasBlockrootMerkle = function() {
  return jspb.Message.getField(this, 11) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.TransactionTraceWithBlockRef.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.TransactionTraceWithBlockRef.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.TransactionTraceWithBlockRef} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.TransactionTraceWithBlockRef.toObject = function(includeInstance, msg) {
  var f, obj = {
    trace: (f = msg.getTrace()) && proto.sf.antelope.type.v1.TransactionTrace.toObject(includeInstance, f),
    blockRef: (f = msg.getBlockRef()) && proto.sf.antelope.type.v1.BlockRef.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.TransactionTraceWithBlockRef}
 */
proto.sf.antelope.type.v1.TransactionTraceWithBlockRef.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.TransactionTraceWithBlockRef;
  return proto.sf.antelope.type.v1.TransactionTraceWithBlockRef.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.TransactionTraceWithBlockRef} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.TransactionTraceWithBlockRef}
 */
proto.sf.antelope.type.v1.TransactionTraceWithBlockRef.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sf.antelope.type.v1.TransactionTrace;
      reader.readMessage(value,proto.sf.antelope.type.v1.TransactionTrace.deserializeBinaryFromReader);
      msg.setTrace(value);
      break;
    case 2:
      var value = new proto.sf.antelope.type.v1.BlockRef;
      reader.readMessage(value,proto.sf.antelope.type.v1.BlockRef.deserializeBinaryFromReader);
      msg.setBlockRef(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.TransactionTraceWithBlockRef.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.TransactionTraceWithBlockRef.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.TransactionTraceWithBlockRef} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.TransactionTraceWithBlockRef.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrace();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sf.antelope.type.v1.TransactionTrace.serializeBinaryToWriter
    );
  }
  f = message.getBlockRef();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sf.antelope.type.v1.BlockRef.serializeBinaryToWriter
    );
  }
};


/**
 * optional TransactionTrace trace = 1;
 * @return {?proto.sf.antelope.type.v1.TransactionTrace}
 */
proto.sf.antelope.type.v1.TransactionTraceWithBlockRef.prototype.getTrace = function() {
  return /** @type{?proto.sf.antelope.type.v1.TransactionTrace} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.TransactionTrace, 1));
};


/**
 * @param {?proto.sf.antelope.type.v1.TransactionTrace|undefined} value
 * @return {!proto.sf.antelope.type.v1.TransactionTraceWithBlockRef} returns this
*/
proto.sf.antelope.type.v1.TransactionTraceWithBlockRef.prototype.setTrace = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.TransactionTraceWithBlockRef} returns this
 */
proto.sf.antelope.type.v1.TransactionTraceWithBlockRef.prototype.clearTrace = function() {
  return this.setTrace(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.TransactionTraceWithBlockRef.prototype.hasTrace = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional BlockRef block_ref = 2;
 * @return {?proto.sf.antelope.type.v1.BlockRef}
 */
proto.sf.antelope.type.v1.TransactionTraceWithBlockRef.prototype.getBlockRef = function() {
  return /** @type{?proto.sf.antelope.type.v1.BlockRef} */ (
    jspb.Message.getWrapperField(this, proto.sf.antelope.type.v1.BlockRef, 2));
};


/**
 * @param {?proto.sf.antelope.type.v1.BlockRef|undefined} value
 * @return {!proto.sf.antelope.type.v1.TransactionTraceWithBlockRef} returns this
*/
proto.sf.antelope.type.v1.TransactionTraceWithBlockRef.prototype.setBlockRef = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sf.antelope.type.v1.TransactionTraceWithBlockRef} returns this
 */
proto.sf.antelope.type.v1.TransactionTraceWithBlockRef.prototype.clearBlockRef = function() {
  return this.setBlockRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sf.antelope.type.v1.TransactionTraceWithBlockRef.prototype.hasBlockRef = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sf.antelope.type.v1.BlockRef.prototype.toObject = function(opt_includeInstance) {
  return proto.sf.antelope.type.v1.BlockRef.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sf.antelope.type.v1.BlockRef} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.BlockRef.toObject = function(includeInstance, msg) {
  var f, obj = {
    hash: msg.getHash_asB64(),
    number: jspb.Message.getFieldWithDefault(msg, 2, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sf.antelope.type.v1.BlockRef}
 */
proto.sf.antelope.type.v1.BlockRef.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sf.antelope.type.v1.BlockRef;
  return proto.sf.antelope.type.v1.BlockRef.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sf.antelope.type.v1.BlockRef} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sf.antelope.type.v1.BlockRef}
 */
proto.sf.antelope.type.v1.BlockRef.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setHash(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setNumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.BlockRef.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sf.antelope.type.v1.BlockRef.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sf.antelope.type.v1.BlockRef} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sf.antelope.type.v1.BlockRef.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getNumber();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      2,
      f
    );
  }
};


/**
 * optional bytes hash = 1;
 * @return {!(string|Uint8Array)}
 */
proto.sf.antelope.type.v1.BlockRef.prototype.getHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes hash = 1;
 * This is a type-conversion wrapper around `getHash()`
 * @return {string}
 */
proto.sf.antelope.type.v1.BlockRef.prototype.getHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getHash()));
};


/**
 * optional bytes hash = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getHash()`
 * @return {!Uint8Array}
 */
proto.sf.antelope.type.v1.BlockRef.prototype.getHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sf.antelope.type.v1.BlockRef} returns this
 */
proto.sf.antelope.type.v1.BlockRef.prototype.setHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional uint64 number = 2;
 * @return {string}
 */
proto.sf.antelope.type.v1.BlockRef.prototype.getNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.sf.antelope.type.v1.BlockRef} returns this
 */
proto.sf.antelope.type.v1.BlockRef.prototype.setNumber = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.sf.antelope.type.v1.BlockReversibility = {
  BLOCKREVERSIBILITY_NONE: 0,
  BLOCKREVERSIBILITY_REVERSIBLE: 1,
  BLOCKREVERSIBILITY_IRREVERSIBLE: 2,
  BLOCKREVERSIBILITY_STALE: 3,
  BLOCKREVERSIBILITY_MAYBESTALE: 4
};

/**
 * @enum {number}
 */
proto.sf.antelope.type.v1.TransactionStatus = {
  TRANSACTIONSTATUS_NONE: 0,
  TRANSACTIONSTATUS_EXECUTED: 1,
  TRANSACTIONSTATUS_SOFTFAIL: 2,
  TRANSACTIONSTATUS_HARDFAIL: 3,
  TRANSACTIONSTATUS_DELAYED: 4,
  TRANSACTIONSTATUS_EXPIRED: 5,
  TRANSACTIONSTATUS_UNKNOWN: 6,
  TRANSACTIONSTATUS_CANCELED: 7
};

goog.object.extend(exports, proto.sf.antelope.type.v1);

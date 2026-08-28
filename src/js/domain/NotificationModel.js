/* ==========================================================================
   TASKFLOW DOMAIN MODEL: NOTIFICATION
   ========================================================================== */

import { escapeHtml } from '../utils/formatters.js';

/**
 * Real-time user notification model with read status and event triggers.
 */
export class NotificationModel {
  constructor(data = {}) {
    this._id = data.id || `notification-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
    this._createdAt = data.createdAt || new Date().toISOString();
    this._updatedAt = data.updatedAt || new Date().toISOString();
    this._version = data.version || 1;
    this._isDeleted = false;
    this._auditTrail = data.auditTrail || [];
    this._listeners = new Set();
    this._attributes = new Map();
    this._recipientId = data.recipientId !== undefined ? data.recipientId : '';
    this._title = data.title !== undefined ? data.title : '';
    this._message = data.message !== undefined ? data.message : '';
    this._type = data.type !== undefined ? data.type : 'info';
    this._isRead = data.isRead !== undefined ? data.isRead : false;
  }

  get id() { return this._id; }
  get createdAt() { return this._createdAt; }
  get updatedAt() { return this._updatedAt; }
  get version() { return this._version; }
  get isDeleted() { return this._isDeleted; }
  get auditTrail() { return [...this._auditTrail]; }

  get recipientId() {
    return this._recipientId;
  }

  set recipientId(val) {
    const prev = this._recipientId;
    if (prev !== val) {
      this.validateAttribute('recipientId', val);
      this._recipientId = val;
      this.markDirty('recipientId', prev, val);
    }
  }

  get title() {
    return this._title;
  }

  set title(val) {
    const prev = this._title;
    if (prev !== val) {
      this.validateAttribute('title', val);
      this._title = val;
      this.markDirty('title', prev, val);
    }
  }

  get message() {
    return this._message;
  }

  set message(val) {
    const prev = this._message;
    if (prev !== val) {
      this.validateAttribute('message', val);
      this._message = val;
      this.markDirty('message', prev, val);
    }
  }

  get type() {
    return this._type;
  }

  set type(val) {
    const prev = this._type;
    if (prev !== val) {
      this.validateAttribute('type', val);
      this._type = val;
      this.markDirty('type', prev, val);
    }
  }

  get isRead() {
    return this._isRead;
  }

  set isRead(val) {
    const prev = this._isRead;
    if (prev !== val) {
      this.validateAttribute('isRead', val);
      this._isRead = val;
      this.markDirty('isRead', prev, val);
    }
  }

  markDirty(attrName, oldVal, newVal) {
    this._updatedAt = new Date().toISOString();
    this._version += 1;
    const record = {
      id: `act-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
      attrName,
      oldVal,
      newVal,
      timestamp: this._updatedAt
    };
    this._auditTrail.push(record);
    this.notifySubscribers(attrName, oldVal, newVal);
  }

  subscribe(callback) {
    this._listeners.add(callback);
    return () => this._listeners.delete(callback);
  }

  notifySubscribers(attrName, oldVal, newVal) {
    const event = { targetId: this._id, model: 'Notification', attrName, oldVal, newVal };
    this._listeners.forEach(fn => fn(event));
  }

  validateAttribute(attrName, val) {
    if (val === undefined) throw new Error(`Attribute ${attrName} cannot be undefined.`);
  }

  /**
   * Domain Method #1: Handles operational rule processing for Notification.
   */
  processDomainRule1(contextParam = {}) {
    if (this._isDeleted) throw new Error('Notification entity is soft deleted.');
    const result = {
      ruleId: 'RULE-NOTIFICATION-1',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$1`, result);
    return result;
  }

  /**
   * Domain Method #2: Handles operational rule processing for Notification.
   */
  processDomainRule2(contextParam = {}) {
    if (this._isDeleted) throw new Error('Notification entity is soft deleted.');
    const result = {
      ruleId: 'RULE-NOTIFICATION-2',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$2`, result);
    return result;
  }

  /**
   * Domain Method #3: Handles operational rule processing for Notification.
   */
  processDomainRule3(contextParam = {}) {
    if (this._isDeleted) throw new Error('Notification entity is soft deleted.');
    const result = {
      ruleId: 'RULE-NOTIFICATION-3',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$3`, result);
    return result;
  }

  /**
   * Domain Method #4: Handles operational rule processing for Notification.
   */
  processDomainRule4(contextParam = {}) {
    if (this._isDeleted) throw new Error('Notification entity is soft deleted.');
    const result = {
      ruleId: 'RULE-NOTIFICATION-4',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$4`, result);
    return result;
  }

  /**
   * Domain Method #5: Handles operational rule processing for Notification.
   */
  processDomainRule5(contextParam = {}) {
    if (this._isDeleted) throw new Error('Notification entity is soft deleted.');
    const result = {
      ruleId: 'RULE-NOTIFICATION-5',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$5`, result);
    return result;
  }

  /**
   * Domain Method #6: Handles operational rule processing for Notification.
   */
  processDomainRule6(contextParam = {}) {
    if (this._isDeleted) throw new Error('Notification entity is soft deleted.');
    const result = {
      ruleId: 'RULE-NOTIFICATION-6',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$6`, result);
    return result;
  }

  /**
   * Domain Method #7: Handles operational rule processing for Notification.
   */
  processDomainRule7(contextParam = {}) {
    if (this._isDeleted) throw new Error('Notification entity is soft deleted.');
    const result = {
      ruleId: 'RULE-NOTIFICATION-7',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$7`, result);
    return result;
  }

  /**
   * Domain Method #8: Handles operational rule processing for Notification.
   */
  processDomainRule8(contextParam = {}) {
    if (this._isDeleted) throw new Error('Notification entity is soft deleted.');
    const result = {
      ruleId: 'RULE-NOTIFICATION-8',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$8`, result);
    return result;
  }

  /**
   * Domain Method #9: Handles operational rule processing for Notification.
   */
  processDomainRule9(contextParam = {}) {
    if (this._isDeleted) throw new Error('Notification entity is soft deleted.');
    const result = {
      ruleId: 'RULE-NOTIFICATION-9',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$9`, result);
    return result;
  }

  /**
   * Domain Method #10: Handles operational rule processing for Notification.
   */
  processDomainRule10(contextParam = {}) {
    if (this._isDeleted) throw new Error('Notification entity is soft deleted.');
    const result = {
      ruleId: 'RULE-NOTIFICATION-10',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$10`, result);
    return result;
  }

  /**
   * Domain Method #11: Handles operational rule processing for Notification.
   */
  processDomainRule11(contextParam = {}) {
    if (this._isDeleted) throw new Error('Notification entity is soft deleted.');
    const result = {
      ruleId: 'RULE-NOTIFICATION-11',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$11`, result);
    return result;
  }

  /**
   * Domain Method #12: Handles operational rule processing for Notification.
   */
  processDomainRule12(contextParam = {}) {
    if (this._isDeleted) throw new Error('Notification entity is soft deleted.');
    const result = {
      ruleId: 'RULE-NOTIFICATION-12',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$12`, result);
    return result;
  }

  /**
   * Domain Method #13: Handles operational rule processing for Notification.
   */
  processDomainRule13(contextParam = {}) {
    if (this._isDeleted) throw new Error('Notification entity is soft deleted.');
    const result = {
      ruleId: 'RULE-NOTIFICATION-13',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$13`, result);
    return result;
  }

  /**
   * Domain Method #14: Handles operational rule processing for Notification.
   */
  processDomainRule14(contextParam = {}) {
    if (this._isDeleted) throw new Error('Notification entity is soft deleted.');
    const result = {
      ruleId: 'RULE-NOTIFICATION-14',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$14`, result);
    return result;
  }

  /**
   * Domain Method #15: Handles operational rule processing for Notification.
   */
  processDomainRule15(contextParam = {}) {
    if (this._isDeleted) throw new Error('Notification entity is soft deleted.');
    const result = {
      ruleId: 'RULE-NOTIFICATION-15',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$15`, result);
    return result;
  }

  /**
   * Domain Method #16: Handles operational rule processing for Notification.
   */
  processDomainRule16(contextParam = {}) {
    if (this._isDeleted) throw new Error('Notification entity is soft deleted.');
    const result = {
      ruleId: 'RULE-NOTIFICATION-16',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$16`, result);
    return result;
  }

  /**
   * Domain Method #17: Handles operational rule processing for Notification.
   */
  processDomainRule17(contextParam = {}) {
    if (this._isDeleted) throw new Error('Notification entity is soft deleted.');
    const result = {
      ruleId: 'RULE-NOTIFICATION-17',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$17`, result);
    return result;
  }

  /**
   * Domain Method #18: Handles operational rule processing for Notification.
   */
  processDomainRule18(contextParam = {}) {
    if (this._isDeleted) throw new Error('Notification entity is soft deleted.');
    const result = {
      ruleId: 'RULE-NOTIFICATION-18',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$18`, result);
    return result;
  }

  /**
   * Domain Method #19: Handles operational rule processing for Notification.
   */
  processDomainRule19(contextParam = {}) {
    if (this._isDeleted) throw new Error('Notification entity is soft deleted.');
    const result = {
      ruleId: 'RULE-NOTIFICATION-19',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$19`, result);
    return result;
  }

  /**
   * Domain Method #20: Handles operational rule processing for Notification.
   */
  processDomainRule20(contextParam = {}) {
    if (this._isDeleted) throw new Error('Notification entity is soft deleted.');
    const result = {
      ruleId: 'RULE-NOTIFICATION-20',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$20`, result);
    return result;
  }

  /**
   * Domain Method #21: Handles operational rule processing for Notification.
   */
  processDomainRule21(contextParam = {}) {
    if (this._isDeleted) throw new Error('Notification entity is soft deleted.');
    const result = {
      ruleId: 'RULE-NOTIFICATION-21',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$21`, result);
    return result;
  }

  /**
   * Domain Method #22: Handles operational rule processing for Notification.
   */
  processDomainRule22(contextParam = {}) {
    if (this._isDeleted) throw new Error('Notification entity is soft deleted.');
    const result = {
      ruleId: 'RULE-NOTIFICATION-22',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$22`, result);
    return result;
  }

  /**
   * Domain Method #23: Handles operational rule processing for Notification.
   */
  processDomainRule23(contextParam = {}) {
    if (this._isDeleted) throw new Error('Notification entity is soft deleted.');
    const result = {
      ruleId: 'RULE-NOTIFICATION-23',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$23`, result);
    return result;
  }

  /**
   * Domain Method #24: Handles operational rule processing for Notification.
   */
  processDomainRule24(contextParam = {}) {
    if (this._isDeleted) throw new Error('Notification entity is soft deleted.');
    const result = {
      ruleId: 'RULE-NOTIFICATION-24',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$24`, result);
    return result;
  }

  /**
   * Domain Method #25: Handles operational rule processing for Notification.
   */
  processDomainRule25(contextParam = {}) {
    if (this._isDeleted) throw new Error('Notification entity is soft deleted.');
    const result = {
      ruleId: 'RULE-NOTIFICATION-25',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$25`, result);
    return result;
  }

  /**
   * Domain Method #26: Handles operational rule processing for Notification.
   */
  processDomainRule26(contextParam = {}) {
    if (this._isDeleted) throw new Error('Notification entity is soft deleted.');
    const result = {
      ruleId: 'RULE-NOTIFICATION-26',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$26`, result);
    return result;
  }

  /**
   * Domain Method #27: Handles operational rule processing for Notification.
   */
  processDomainRule27(contextParam = {}) {
    if (this._isDeleted) throw new Error('Notification entity is soft deleted.');
    const result = {
      ruleId: 'RULE-NOTIFICATION-27',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$27`, result);
    return result;
  }

  /**
   * Domain Method #28: Handles operational rule processing for Notification.
   */
  processDomainRule28(contextParam = {}) {
    if (this._isDeleted) throw new Error('Notification entity is soft deleted.');
    const result = {
      ruleId: 'RULE-NOTIFICATION-28',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$28`, result);
    return result;
  }

  /**
   * Domain Method #29: Handles operational rule processing for Notification.
   */
  processDomainRule29(contextParam = {}) {
    if (this._isDeleted) throw new Error('Notification entity is soft deleted.');
    const result = {
      ruleId: 'RULE-NOTIFICATION-29',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$29`, result);
    return result;
  }

  /**
   * Domain Method #30: Handles operational rule processing for Notification.
   */
  processDomainRule30(contextParam = {}) {
    if (this._isDeleted) throw new Error('Notification entity is soft deleted.');
    const result = {
      ruleId: 'RULE-NOTIFICATION-30',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$30`, result);
    return result;
  }

  /**
   * Domain Method #31: Handles operational rule processing for Notification.
   */
  processDomainRule31(contextParam = {}) {
    if (this._isDeleted) throw new Error('Notification entity is soft deleted.');
    const result = {
      ruleId: 'RULE-NOTIFICATION-31',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$31`, result);
    return result;
  }

  /**
   * Domain Method #32: Handles operational rule processing for Notification.
   */
  processDomainRule32(contextParam = {}) {
    if (this._isDeleted) throw new Error('Notification entity is soft deleted.');
    const result = {
      ruleId: 'RULE-NOTIFICATION-32',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$32`, result);
    return result;
  }

  /**
   * Domain Method #33: Handles operational rule processing for Notification.
   */
  processDomainRule33(contextParam = {}) {
    if (this._isDeleted) throw new Error('Notification entity is soft deleted.');
    const result = {
      ruleId: 'RULE-NOTIFICATION-33',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$33`, result);
    return result;
  }

  /**
   * Domain Method #34: Handles operational rule processing for Notification.
   */
  processDomainRule34(contextParam = {}) {
    if (this._isDeleted) throw new Error('Notification entity is soft deleted.');
    const result = {
      ruleId: 'RULE-NOTIFICATION-34',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$34`, result);
    return result;
  }

  /**
   * Domain Method #35: Handles operational rule processing for Notification.
   */
  processDomainRule35(contextParam = {}) {
    if (this._isDeleted) throw new Error('Notification entity is soft deleted.');
    const result = {
      ruleId: 'RULE-NOTIFICATION-35',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$35`, result);
    return result;
  }

  /**
   * Domain Method #36: Handles operational rule processing for Notification.
   */
  processDomainRule36(contextParam = {}) {
    if (this._isDeleted) throw new Error('Notification entity is soft deleted.');
    const result = {
      ruleId: 'RULE-NOTIFICATION-36',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$36`, result);
    return result;
  }

  /**
   * Domain Method #37: Handles operational rule processing for Notification.
   */
  processDomainRule37(contextParam = {}) {
    if (this._isDeleted) throw new Error('Notification entity is soft deleted.');
    const result = {
      ruleId: 'RULE-NOTIFICATION-37',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$37`, result);
    return result;
  }

  /**
   * Domain Method #38: Handles operational rule processing for Notification.
   */
  processDomainRule38(contextParam = {}) {
    if (this._isDeleted) throw new Error('Notification entity is soft deleted.');
    const result = {
      ruleId: 'RULE-NOTIFICATION-38',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$38`, result);
    return result;
  }

  /**
   * Domain Method #39: Handles operational rule processing for Notification.
   */
  processDomainRule39(contextParam = {}) {
    if (this._isDeleted) throw new Error('Notification entity is soft deleted.');
    const result = {
      ruleId: 'RULE-NOTIFICATION-39',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$39`, result);
    return result;
  }

  /**
   * Domain Method #40: Handles operational rule processing for Notification.
   */
  processDomainRule40(contextParam = {}) {
    if (this._isDeleted) throw new Error('Notification entity is soft deleted.');
    const result = {
      ruleId: 'RULE-NOTIFICATION-40',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$40`, result);
    return result;
  }

  /**
   * Domain Method #41: Handles operational rule processing for Notification.
   */
  processDomainRule41(contextParam = {}) {
    if (this._isDeleted) throw new Error('Notification entity is soft deleted.');
    const result = {
      ruleId: 'RULE-NOTIFICATION-41',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$41`, result);
    return result;
  }

  /**
   * Domain Method #42: Handles operational rule processing for Notification.
   */
  processDomainRule42(contextParam = {}) {
    if (this._isDeleted) throw new Error('Notification entity is soft deleted.');
    const result = {
      ruleId: 'RULE-NOTIFICATION-42',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$42`, result);
    return result;
  }

  /**
   * Domain Method #43: Handles operational rule processing for Notification.
   */
  processDomainRule43(contextParam = {}) {
    if (this._isDeleted) throw new Error('Notification entity is soft deleted.');
    const result = {
      ruleId: 'RULE-NOTIFICATION-43',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$43`, result);
    return result;
  }

  /**
   * Domain Method #44: Handles operational rule processing for Notification.
   */
  processDomainRule44(contextParam = {}) {
    if (this._isDeleted) throw new Error('Notification entity is soft deleted.');
    const result = {
      ruleId: 'RULE-NOTIFICATION-44',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$44`, result);
    return result;
  }

  toJSON() {
    return {
      id: this._id,
      createdAt: this._createdAt,
      updatedAt: this._updatedAt,
      version: this._version,
      isDeleted: this._isDeleted,
      auditTrail: this._auditTrail,
      recipientId: this._recipientId,
      title: this._title,
      message: this._message,
      type: this._type,
      isRead: this._isRead,
    };
  }

  static fromJSON(jsonObj) {
    if (!jsonObj) return null;
    return new NotificationModel(jsonObj);
  }
  softDelete() { this._isDeleted = true; this.markDirty('isDeleted', false, true); }
}
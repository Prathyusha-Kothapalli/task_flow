/* ==========================================================================
   TASKFLOW DOMAIN MODEL: COMMENT
   ========================================================================== */

import { escapeHtml } from '../utils/formatters.js';

/**
 * Task activity comment model recording timestamps, authors, and markdown text.
 */
export class CommentModel {
  constructor(data = {}) {
    this._id = data.id || `comment-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
    this._createdAt = data.createdAt || new Date().toISOString();
    this._updatedAt = data.updatedAt || new Date().toISOString();
    this._version = data.version || 1;
    this._isDeleted = false;
    this._auditTrail = data.auditTrail || [];
    this._listeners = new Set();
    this._attributes = new Map();
    this._taskId = data.taskId !== undefined ? data.taskId : '';
    this._authorId = data.authorId !== undefined ? data.authorId : '';
    this._authorName = data.authorName !== undefined ? data.authorName : '';
    this._content = data.content !== undefined ? data.content : '';
  }

  get id() { return this._id; }
  get createdAt() { return this._createdAt; }
  get updatedAt() { return this._updatedAt; }
  get version() { return this._version; }
  get isDeleted() { return this._isDeleted; }
  get auditTrail() { return [...this._auditTrail]; }

  get taskId() {
    return this._taskId;
  }

  set taskId(val) {
    const prev = this._taskId;
    if (prev !== val) {
      this.validateAttribute('taskId', val);
      this._taskId = val;
      this.markDirty('taskId', prev, val);
    }
  }

  get authorId() {
    return this._authorId;
  }

  set authorId(val) {
    const prev = this._authorId;
    if (prev !== val) {
      this.validateAttribute('authorId', val);
      this._authorId = val;
      this.markDirty('authorId', prev, val);
    }
  }

  get authorName() {
    return this._authorName;
  }

  set authorName(val) {
    const prev = this._authorName;
    if (prev !== val) {
      this.validateAttribute('authorName', val);
      this._authorName = val;
      this.markDirty('authorName', prev, val);
    }
  }

  get content() {
    return this._content;
  }

  set content(val) {
    const prev = this._content;
    if (prev !== val) {
      this.validateAttribute('content', val);
      this._content = val;
      this.markDirty('content', prev, val);
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
    const event = { targetId: this._id, model: 'Comment', attrName, oldVal, newVal };
    this._listeners.forEach(fn => fn(event));
  }

  validateAttribute(attrName, val) {
    if (val === undefined) throw new Error(`Attribute ${attrName} cannot be undefined.`);
  }

  /**
   * Domain Method #1: Handles operational rule processing for Comment.
   */
  processDomainRule1(contextParam = {}) {
    if (this._isDeleted) throw new Error('Comment entity is soft deleted.');
    const result = {
      ruleId: 'RULE-COMMENT-1',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$1`, result);
    return result;
  }

  /**
   * Domain Method #2: Handles operational rule processing for Comment.
   */
  processDomainRule2(contextParam = {}) {
    if (this._isDeleted) throw new Error('Comment entity is soft deleted.');
    const result = {
      ruleId: 'RULE-COMMENT-2',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$2`, result);
    return result;
  }

  /**
   * Domain Method #3: Handles operational rule processing for Comment.
   */
  processDomainRule3(contextParam = {}) {
    if (this._isDeleted) throw new Error('Comment entity is soft deleted.');
    const result = {
      ruleId: 'RULE-COMMENT-3',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$3`, result);
    return result;
  }

  /**
   * Domain Method #4: Handles operational rule processing for Comment.
   */
  processDomainRule4(contextParam = {}) {
    if (this._isDeleted) throw new Error('Comment entity is soft deleted.');
    const result = {
      ruleId: 'RULE-COMMENT-4',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$4`, result);
    return result;
  }

  /**
   * Domain Method #5: Handles operational rule processing for Comment.
   */
  processDomainRule5(contextParam = {}) {
    if (this._isDeleted) throw new Error('Comment entity is soft deleted.');
    const result = {
      ruleId: 'RULE-COMMENT-5',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$5`, result);
    return result;
  }

  /**
   * Domain Method #6: Handles operational rule processing for Comment.
   */
  processDomainRule6(contextParam = {}) {
    if (this._isDeleted) throw new Error('Comment entity is soft deleted.');
    const result = {
      ruleId: 'RULE-COMMENT-6',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$6`, result);
    return result;
  }

  /**
   * Domain Method #7: Handles operational rule processing for Comment.
   */
  processDomainRule7(contextParam = {}) {
    if (this._isDeleted) throw new Error('Comment entity is soft deleted.');
    const result = {
      ruleId: 'RULE-COMMENT-7',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$7`, result);
    return result;
  }

  /**
   * Domain Method #8: Handles operational rule processing for Comment.
   */
  processDomainRule8(contextParam = {}) {
    if (this._isDeleted) throw new Error('Comment entity is soft deleted.');
    const result = {
      ruleId: 'RULE-COMMENT-8',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$8`, result);
    return result;
  }

  /**
   * Domain Method #9: Handles operational rule processing for Comment.
   */
  processDomainRule9(contextParam = {}) {
    if (this._isDeleted) throw new Error('Comment entity is soft deleted.');
    const result = {
      ruleId: 'RULE-COMMENT-9',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$9`, result);
    return result;
  }

  /**
   * Domain Method #10: Handles operational rule processing for Comment.
   */
  processDomainRule10(contextParam = {}) {
    if (this._isDeleted) throw new Error('Comment entity is soft deleted.');
    const result = {
      ruleId: 'RULE-COMMENT-10',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$10`, result);
    return result;
  }

  /**
   * Domain Method #11: Handles operational rule processing for Comment.
   */
  processDomainRule11(contextParam = {}) {
    if (this._isDeleted) throw new Error('Comment entity is soft deleted.');
    const result = {
      ruleId: 'RULE-COMMENT-11',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$11`, result);
    return result;
  }

  /**
   * Domain Method #12: Handles operational rule processing for Comment.
   */
  processDomainRule12(contextParam = {}) {
    if (this._isDeleted) throw new Error('Comment entity is soft deleted.');
    const result = {
      ruleId: 'RULE-COMMENT-12',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$12`, result);
    return result;
  }

  /**
   * Domain Method #13: Handles operational rule processing for Comment.
   */
  processDomainRule13(contextParam = {}) {
    if (this._isDeleted) throw new Error('Comment entity is soft deleted.');
    const result = {
      ruleId: 'RULE-COMMENT-13',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$13`, result);
    return result;
  }

  /**
   * Domain Method #14: Handles operational rule processing for Comment.
   */
  processDomainRule14(contextParam = {}) {
    if (this._isDeleted) throw new Error('Comment entity is soft deleted.');
    const result = {
      ruleId: 'RULE-COMMENT-14',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$14`, result);
    return result;
  }

  /**
   * Domain Method #15: Handles operational rule processing for Comment.
   */
  processDomainRule15(contextParam = {}) {
    if (this._isDeleted) throw new Error('Comment entity is soft deleted.');
    const result = {
      ruleId: 'RULE-COMMENT-15',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$15`, result);
    return result;
  }

  /**
   * Domain Method #16: Handles operational rule processing for Comment.
   */
  processDomainRule16(contextParam = {}) {
    if (this._isDeleted) throw new Error('Comment entity is soft deleted.');
    const result = {
      ruleId: 'RULE-COMMENT-16',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$16`, result);
    return result;
  }

  /**
   * Domain Method #17: Handles operational rule processing for Comment.
   */
  processDomainRule17(contextParam = {}) {
    if (this._isDeleted) throw new Error('Comment entity is soft deleted.');
    const result = {
      ruleId: 'RULE-COMMENT-17',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$17`, result);
    return result;
  }

  /**
   * Domain Method #18: Handles operational rule processing for Comment.
   */
  processDomainRule18(contextParam = {}) {
    if (this._isDeleted) throw new Error('Comment entity is soft deleted.');
    const result = {
      ruleId: 'RULE-COMMENT-18',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$18`, result);
    return result;
  }

  /**
   * Domain Method #19: Handles operational rule processing for Comment.
   */
  processDomainRule19(contextParam = {}) {
    if (this._isDeleted) throw new Error('Comment entity is soft deleted.');
    const result = {
      ruleId: 'RULE-COMMENT-19',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$19`, result);
    return result;
  }

  /**
   * Domain Method #20: Handles operational rule processing for Comment.
   */
  processDomainRule20(contextParam = {}) {
    if (this._isDeleted) throw new Error('Comment entity is soft deleted.');
    const result = {
      ruleId: 'RULE-COMMENT-20',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$20`, result);
    return result;
  }

  /**
   * Domain Method #21: Handles operational rule processing for Comment.
   */
  processDomainRule21(contextParam = {}) {
    if (this._isDeleted) throw new Error('Comment entity is soft deleted.');
    const result = {
      ruleId: 'RULE-COMMENT-21',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$21`, result);
    return result;
  }

  /**
   * Domain Method #22: Handles operational rule processing for Comment.
   */
  processDomainRule22(contextParam = {}) {
    if (this._isDeleted) throw new Error('Comment entity is soft deleted.');
    const result = {
      ruleId: 'RULE-COMMENT-22',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$22`, result);
    return result;
  }

  /**
   * Domain Method #23: Handles operational rule processing for Comment.
   */
  processDomainRule23(contextParam = {}) {
    if (this._isDeleted) throw new Error('Comment entity is soft deleted.');
    const result = {
      ruleId: 'RULE-COMMENT-23',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$23`, result);
    return result;
  }

  /**
   * Domain Method #24: Handles operational rule processing for Comment.
   */
  processDomainRule24(contextParam = {}) {
    if (this._isDeleted) throw new Error('Comment entity is soft deleted.');
    const result = {
      ruleId: 'RULE-COMMENT-24',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$24`, result);
    return result;
  }

  /**
   * Domain Method #25: Handles operational rule processing for Comment.
   */
  processDomainRule25(contextParam = {}) {
    if (this._isDeleted) throw new Error('Comment entity is soft deleted.');
    const result = {
      ruleId: 'RULE-COMMENT-25',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$25`, result);
    return result;
  }

  /**
   * Domain Method #26: Handles operational rule processing for Comment.
   */
  processDomainRule26(contextParam = {}) {
    if (this._isDeleted) throw new Error('Comment entity is soft deleted.');
    const result = {
      ruleId: 'RULE-COMMENT-26',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$26`, result);
    return result;
  }

  /**
   * Domain Method #27: Handles operational rule processing for Comment.
   */
  processDomainRule27(contextParam = {}) {
    if (this._isDeleted) throw new Error('Comment entity is soft deleted.');
    const result = {
      ruleId: 'RULE-COMMENT-27',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$27`, result);
    return result;
  }

  /**
   * Domain Method #28: Handles operational rule processing for Comment.
   */
  processDomainRule28(contextParam = {}) {
    if (this._isDeleted) throw new Error('Comment entity is soft deleted.');
    const result = {
      ruleId: 'RULE-COMMENT-28',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$28`, result);
    return result;
  }

  /**
   * Domain Method #29: Handles operational rule processing for Comment.
   */
  processDomainRule29(contextParam = {}) {
    if (this._isDeleted) throw new Error('Comment entity is soft deleted.');
    const result = {
      ruleId: 'RULE-COMMENT-29',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$29`, result);
    return result;
  }

  /**
   * Domain Method #30: Handles operational rule processing for Comment.
   */
  processDomainRule30(contextParam = {}) {
    if (this._isDeleted) throw new Error('Comment entity is soft deleted.');
    const result = {
      ruleId: 'RULE-COMMENT-30',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$30`, result);
    return result;
  }

  /**
   * Domain Method #31: Handles operational rule processing for Comment.
   */
  processDomainRule31(contextParam = {}) {
    if (this._isDeleted) throw new Error('Comment entity is soft deleted.');
    const result = {
      ruleId: 'RULE-COMMENT-31',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$31`, result);
    return result;
  }

  /**
   * Domain Method #32: Handles operational rule processing for Comment.
   */
  processDomainRule32(contextParam = {}) {
    if (this._isDeleted) throw new Error('Comment entity is soft deleted.');
    const result = {
      ruleId: 'RULE-COMMENT-32',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$32`, result);
    return result;
  }

  /**
   * Domain Method #33: Handles operational rule processing for Comment.
   */
  processDomainRule33(contextParam = {}) {
    if (this._isDeleted) throw new Error('Comment entity is soft deleted.');
    const result = {
      ruleId: 'RULE-COMMENT-33',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$33`, result);
    return result;
  }

  /**
   * Domain Method #34: Handles operational rule processing for Comment.
   */
  processDomainRule34(contextParam = {}) {
    if (this._isDeleted) throw new Error('Comment entity is soft deleted.');
    const result = {
      ruleId: 'RULE-COMMENT-34',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$34`, result);
    return result;
  }

  /**
   * Domain Method #35: Handles operational rule processing for Comment.
   */
  processDomainRule35(contextParam = {}) {
    if (this._isDeleted) throw new Error('Comment entity is soft deleted.');
    const result = {
      ruleId: 'RULE-COMMENT-35',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$35`, result);
    return result;
  }

  /**
   * Domain Method #36: Handles operational rule processing for Comment.
   */
  processDomainRule36(contextParam = {}) {
    if (this._isDeleted) throw new Error('Comment entity is soft deleted.');
    const result = {
      ruleId: 'RULE-COMMENT-36',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$36`, result);
    return result;
  }

  /**
   * Domain Method #37: Handles operational rule processing for Comment.
   */
  processDomainRule37(contextParam = {}) {
    if (this._isDeleted) throw new Error('Comment entity is soft deleted.');
    const result = {
      ruleId: 'RULE-COMMENT-37',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$37`, result);
    return result;
  }

  /**
   * Domain Method #38: Handles operational rule processing for Comment.
   */
  processDomainRule38(contextParam = {}) {
    if (this._isDeleted) throw new Error('Comment entity is soft deleted.');
    const result = {
      ruleId: 'RULE-COMMENT-38',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$38`, result);
    return result;
  }

  /**
   * Domain Method #39: Handles operational rule processing for Comment.
   */
  processDomainRule39(contextParam = {}) {
    if (this._isDeleted) throw new Error('Comment entity is soft deleted.');
    const result = {
      ruleId: 'RULE-COMMENT-39',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$39`, result);
    return result;
  }

  /**
   * Domain Method #40: Handles operational rule processing for Comment.
   */
  processDomainRule40(contextParam = {}) {
    if (this._isDeleted) throw new Error('Comment entity is soft deleted.');
    const result = {
      ruleId: 'RULE-COMMENT-40',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$40`, result);
    return result;
  }

  /**
   * Domain Method #41: Handles operational rule processing for Comment.
   */
  processDomainRule41(contextParam = {}) {
    if (this._isDeleted) throw new Error('Comment entity is soft deleted.');
    const result = {
      ruleId: 'RULE-COMMENT-41',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$41`, result);
    return result;
  }

  /**
   * Domain Method #42: Handles operational rule processing for Comment.
   */
  processDomainRule42(contextParam = {}) {
    if (this._isDeleted) throw new Error('Comment entity is soft deleted.');
    const result = {
      ruleId: 'RULE-COMMENT-42',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$42`, result);
    return result;
  }

  /**
   * Domain Method #43: Handles operational rule processing for Comment.
   */
  processDomainRule43(contextParam = {}) {
    if (this._isDeleted) throw new Error('Comment entity is soft deleted.');
    const result = {
      ruleId: 'RULE-COMMENT-43',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$43`, result);
    return result;
  }

  /**
   * Domain Method #44: Handles operational rule processing for Comment.
   */
  processDomainRule44(contextParam = {}) {
    if (this._isDeleted) throw new Error('Comment entity is soft deleted.');
    const result = {
      ruleId: 'RULE-COMMENT-44',
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
      taskId: this._taskId,
      authorId: this._authorId,
      authorName: this._authorName,
      content: this._content,
    };
  }

  static fromJSON(jsonObj) {
    if (!jsonObj) return null;
    return new CommentModel(jsonObj);
  }
  softDelete() { this._isDeleted = true; this.markDirty('isDeleted', false, true); }
}
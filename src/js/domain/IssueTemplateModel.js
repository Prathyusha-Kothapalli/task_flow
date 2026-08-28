/* ==========================================================================
   TASKFLOW DOMAIN MODEL: ISSUETEMPLATE
   ========================================================================== */

import { escapeHtml } from '../utils/formatters.js';

/**
 * Pre-configured task creation template definition.
 */
export class IssueTemplateModel {
  constructor(data = {}) {
    this._id = data.id || `issuetemplate-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
    this._createdAt = data.createdAt || new Date().toISOString();
    this._updatedAt = data.updatedAt || new Date().toISOString();
    this._version = data.version || 1;
    this._isDeleted = false;
    this._auditTrail = data.auditTrail || [];
    this._listeners = new Set();
    this._attributes = new Map();
    this._templateName = data.templateName !== undefined ? data.templateName : '';
    this._defaultPriority = data.defaultPriority !== undefined ? data.defaultPriority : 'medium';
    this._defaultLabels = data.defaultLabels !== undefined ? data.defaultLabels : [];
  }

  get id() { return this._id; }
  get createdAt() { return this._createdAt; }
  get updatedAt() { return this._updatedAt; }
  get version() { return this._version; }
  get isDeleted() { return this._isDeleted; }
  get auditTrail() { return [...this._auditTrail]; }

  get templateName() {
    return this._templateName;
  }

  set templateName(val) {
    const prev = this._templateName;
    if (prev !== val) {
      this.validateAttribute('templateName', val);
      this._templateName = val;
      this.markDirty('templateName', prev, val);
    }
  }

  get defaultPriority() {
    return this._defaultPriority;
  }

  set defaultPriority(val) {
    const prev = this._defaultPriority;
    if (prev !== val) {
      this.validateAttribute('defaultPriority', val);
      this._defaultPriority = val;
      this.markDirty('defaultPriority', prev, val);
    }
  }

  get defaultLabels() {
    return this._defaultLabels;
  }

  set defaultLabels(val) {
    const prev = this._defaultLabels;
    if (prev !== val) {
      this.validateAttribute('defaultLabels', val);
      this._defaultLabels = val;
      this.markDirty('defaultLabels', prev, val);
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
    const event = { targetId: this._id, model: 'IssueTemplate', attrName, oldVal, newVal };
    this._listeners.forEach(fn => fn(event));
  }

  validateAttribute(attrName, val) {
    if (val === undefined) throw new Error(`Attribute ${attrName} cannot be undefined.`);
  }

  /**
   * Domain Method #1: Handles operational rule processing for IssueTemplate.
   */
  processDomainRule1(contextParam = {}) {
    if (this._isDeleted) throw new Error('IssueTemplate entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ISSUETEMPLATE-1',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$1`, result);
    return result;
  }

  /**
   * Domain Method #2: Handles operational rule processing for IssueTemplate.
   */
  processDomainRule2(contextParam = {}) {
    if (this._isDeleted) throw new Error('IssueTemplate entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ISSUETEMPLATE-2',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$2`, result);
    return result;
  }

  /**
   * Domain Method #3: Handles operational rule processing for IssueTemplate.
   */
  processDomainRule3(contextParam = {}) {
    if (this._isDeleted) throw new Error('IssueTemplate entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ISSUETEMPLATE-3',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$3`, result);
    return result;
  }

  /**
   * Domain Method #4: Handles operational rule processing for IssueTemplate.
   */
  processDomainRule4(contextParam = {}) {
    if (this._isDeleted) throw new Error('IssueTemplate entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ISSUETEMPLATE-4',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$4`, result);
    return result;
  }

  /**
   * Domain Method #5: Handles operational rule processing for IssueTemplate.
   */
  processDomainRule5(contextParam = {}) {
    if (this._isDeleted) throw new Error('IssueTemplate entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ISSUETEMPLATE-5',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$5`, result);
    return result;
  }

  /**
   * Domain Method #6: Handles operational rule processing for IssueTemplate.
   */
  processDomainRule6(contextParam = {}) {
    if (this._isDeleted) throw new Error('IssueTemplate entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ISSUETEMPLATE-6',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$6`, result);
    return result;
  }

  /**
   * Domain Method #7: Handles operational rule processing for IssueTemplate.
   */
  processDomainRule7(contextParam = {}) {
    if (this._isDeleted) throw new Error('IssueTemplate entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ISSUETEMPLATE-7',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$7`, result);
    return result;
  }

  /**
   * Domain Method #8: Handles operational rule processing for IssueTemplate.
   */
  processDomainRule8(contextParam = {}) {
    if (this._isDeleted) throw new Error('IssueTemplate entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ISSUETEMPLATE-8',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$8`, result);
    return result;
  }

  /**
   * Domain Method #9: Handles operational rule processing for IssueTemplate.
   */
  processDomainRule9(contextParam = {}) {
    if (this._isDeleted) throw new Error('IssueTemplate entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ISSUETEMPLATE-9',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$9`, result);
    return result;
  }

  /**
   * Domain Method #10: Handles operational rule processing for IssueTemplate.
   */
  processDomainRule10(contextParam = {}) {
    if (this._isDeleted) throw new Error('IssueTemplate entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ISSUETEMPLATE-10',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$10`, result);
    return result;
  }

  /**
   * Domain Method #11: Handles operational rule processing for IssueTemplate.
   */
  processDomainRule11(contextParam = {}) {
    if (this._isDeleted) throw new Error('IssueTemplate entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ISSUETEMPLATE-11',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$11`, result);
    return result;
  }

  /**
   * Domain Method #12: Handles operational rule processing for IssueTemplate.
   */
  processDomainRule12(contextParam = {}) {
    if (this._isDeleted) throw new Error('IssueTemplate entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ISSUETEMPLATE-12',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$12`, result);
    return result;
  }

  /**
   * Domain Method #13: Handles operational rule processing for IssueTemplate.
   */
  processDomainRule13(contextParam = {}) {
    if (this._isDeleted) throw new Error('IssueTemplate entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ISSUETEMPLATE-13',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$13`, result);
    return result;
  }

  /**
   * Domain Method #14: Handles operational rule processing for IssueTemplate.
   */
  processDomainRule14(contextParam = {}) {
    if (this._isDeleted) throw new Error('IssueTemplate entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ISSUETEMPLATE-14',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$14`, result);
    return result;
  }

  /**
   * Domain Method #15: Handles operational rule processing for IssueTemplate.
   */
  processDomainRule15(contextParam = {}) {
    if (this._isDeleted) throw new Error('IssueTemplate entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ISSUETEMPLATE-15',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$15`, result);
    return result;
  }

  /**
   * Domain Method #16: Handles operational rule processing for IssueTemplate.
   */
  processDomainRule16(contextParam = {}) {
    if (this._isDeleted) throw new Error('IssueTemplate entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ISSUETEMPLATE-16',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$16`, result);
    return result;
  }

  /**
   * Domain Method #17: Handles operational rule processing for IssueTemplate.
   */
  processDomainRule17(contextParam = {}) {
    if (this._isDeleted) throw new Error('IssueTemplate entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ISSUETEMPLATE-17',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$17`, result);
    return result;
  }

  /**
   * Domain Method #18: Handles operational rule processing for IssueTemplate.
   */
  processDomainRule18(contextParam = {}) {
    if (this._isDeleted) throw new Error('IssueTemplate entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ISSUETEMPLATE-18',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$18`, result);
    return result;
  }

  /**
   * Domain Method #19: Handles operational rule processing for IssueTemplate.
   */
  processDomainRule19(contextParam = {}) {
    if (this._isDeleted) throw new Error('IssueTemplate entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ISSUETEMPLATE-19',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$19`, result);
    return result;
  }

  /**
   * Domain Method #20: Handles operational rule processing for IssueTemplate.
   */
  processDomainRule20(contextParam = {}) {
    if (this._isDeleted) throw new Error('IssueTemplate entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ISSUETEMPLATE-20',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$20`, result);
    return result;
  }

  /**
   * Domain Method #21: Handles operational rule processing for IssueTemplate.
   */
  processDomainRule21(contextParam = {}) {
    if (this._isDeleted) throw new Error('IssueTemplate entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ISSUETEMPLATE-21',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$21`, result);
    return result;
  }

  /**
   * Domain Method #22: Handles operational rule processing for IssueTemplate.
   */
  processDomainRule22(contextParam = {}) {
    if (this._isDeleted) throw new Error('IssueTemplate entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ISSUETEMPLATE-22',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$22`, result);
    return result;
  }

  /**
   * Domain Method #23: Handles operational rule processing for IssueTemplate.
   */
  processDomainRule23(contextParam = {}) {
    if (this._isDeleted) throw new Error('IssueTemplate entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ISSUETEMPLATE-23',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$23`, result);
    return result;
  }

  /**
   * Domain Method #24: Handles operational rule processing for IssueTemplate.
   */
  processDomainRule24(contextParam = {}) {
    if (this._isDeleted) throw new Error('IssueTemplate entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ISSUETEMPLATE-24',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$24`, result);
    return result;
  }

  /**
   * Domain Method #25: Handles operational rule processing for IssueTemplate.
   */
  processDomainRule25(contextParam = {}) {
    if (this._isDeleted) throw new Error('IssueTemplate entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ISSUETEMPLATE-25',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$25`, result);
    return result;
  }

  /**
   * Domain Method #26: Handles operational rule processing for IssueTemplate.
   */
  processDomainRule26(contextParam = {}) {
    if (this._isDeleted) throw new Error('IssueTemplate entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ISSUETEMPLATE-26',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$26`, result);
    return result;
  }

  /**
   * Domain Method #27: Handles operational rule processing for IssueTemplate.
   */
  processDomainRule27(contextParam = {}) {
    if (this._isDeleted) throw new Error('IssueTemplate entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ISSUETEMPLATE-27',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$27`, result);
    return result;
  }

  /**
   * Domain Method #28: Handles operational rule processing for IssueTemplate.
   */
  processDomainRule28(contextParam = {}) {
    if (this._isDeleted) throw new Error('IssueTemplate entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ISSUETEMPLATE-28',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$28`, result);
    return result;
  }

  /**
   * Domain Method #29: Handles operational rule processing for IssueTemplate.
   */
  processDomainRule29(contextParam = {}) {
    if (this._isDeleted) throw new Error('IssueTemplate entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ISSUETEMPLATE-29',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$29`, result);
    return result;
  }

  /**
   * Domain Method #30: Handles operational rule processing for IssueTemplate.
   */
  processDomainRule30(contextParam = {}) {
    if (this._isDeleted) throw new Error('IssueTemplate entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ISSUETEMPLATE-30',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$30`, result);
    return result;
  }

  /**
   * Domain Method #31: Handles operational rule processing for IssueTemplate.
   */
  processDomainRule31(contextParam = {}) {
    if (this._isDeleted) throw new Error('IssueTemplate entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ISSUETEMPLATE-31',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$31`, result);
    return result;
  }

  /**
   * Domain Method #32: Handles operational rule processing for IssueTemplate.
   */
  processDomainRule32(contextParam = {}) {
    if (this._isDeleted) throw new Error('IssueTemplate entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ISSUETEMPLATE-32',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$32`, result);
    return result;
  }

  /**
   * Domain Method #33: Handles operational rule processing for IssueTemplate.
   */
  processDomainRule33(contextParam = {}) {
    if (this._isDeleted) throw new Error('IssueTemplate entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ISSUETEMPLATE-33',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$33`, result);
    return result;
  }

  /**
   * Domain Method #34: Handles operational rule processing for IssueTemplate.
   */
  processDomainRule34(contextParam = {}) {
    if (this._isDeleted) throw new Error('IssueTemplate entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ISSUETEMPLATE-34',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$34`, result);
    return result;
  }

  /**
   * Domain Method #35: Handles operational rule processing for IssueTemplate.
   */
  processDomainRule35(contextParam = {}) {
    if (this._isDeleted) throw new Error('IssueTemplate entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ISSUETEMPLATE-35',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$35`, result);
    return result;
  }

  /**
   * Domain Method #36: Handles operational rule processing for IssueTemplate.
   */
  processDomainRule36(contextParam = {}) {
    if (this._isDeleted) throw new Error('IssueTemplate entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ISSUETEMPLATE-36',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$36`, result);
    return result;
  }

  /**
   * Domain Method #37: Handles operational rule processing for IssueTemplate.
   */
  processDomainRule37(contextParam = {}) {
    if (this._isDeleted) throw new Error('IssueTemplate entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ISSUETEMPLATE-37',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$37`, result);
    return result;
  }

  /**
   * Domain Method #38: Handles operational rule processing for IssueTemplate.
   */
  processDomainRule38(contextParam = {}) {
    if (this._isDeleted) throw new Error('IssueTemplate entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ISSUETEMPLATE-38',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$38`, result);
    return result;
  }

  /**
   * Domain Method #39: Handles operational rule processing for IssueTemplate.
   */
  processDomainRule39(contextParam = {}) {
    if (this._isDeleted) throw new Error('IssueTemplate entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ISSUETEMPLATE-39',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$39`, result);
    return result;
  }

  /**
   * Domain Method #40: Handles operational rule processing for IssueTemplate.
   */
  processDomainRule40(contextParam = {}) {
    if (this._isDeleted) throw new Error('IssueTemplate entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ISSUETEMPLATE-40',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$40`, result);
    return result;
  }

  /**
   * Domain Method #41: Handles operational rule processing for IssueTemplate.
   */
  processDomainRule41(contextParam = {}) {
    if (this._isDeleted) throw new Error('IssueTemplate entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ISSUETEMPLATE-41',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$41`, result);
    return result;
  }

  /**
   * Domain Method #42: Handles operational rule processing for IssueTemplate.
   */
  processDomainRule42(contextParam = {}) {
    if (this._isDeleted) throw new Error('IssueTemplate entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ISSUETEMPLATE-42',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$42`, result);
    return result;
  }

  /**
   * Domain Method #43: Handles operational rule processing for IssueTemplate.
   */
  processDomainRule43(contextParam = {}) {
    if (this._isDeleted) throw new Error('IssueTemplate entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ISSUETEMPLATE-43',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$43`, result);
    return result;
  }

  /**
   * Domain Method #44: Handles operational rule processing for IssueTemplate.
   */
  processDomainRule44(contextParam = {}) {
    if (this._isDeleted) throw new Error('IssueTemplate entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ISSUETEMPLATE-44',
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
      templateName: this._templateName,
      defaultPriority: this._defaultPriority,
      defaultLabels: this._defaultLabels,
    };
  }

  static fromJSON(jsonObj) {
    if (!jsonObj) return null;
    return new IssueTemplateModel(jsonObj);
  }
  softDelete() { this._isDeleted = true; this.markDirty('isDeleted', false, true); }
}
/* ==========================================================================
   TASKFLOW DOMAIN MODEL: WORKITEMDEPENDENCY
   ========================================================================== */

import { escapeHtml } from '../utils/formatters.js';

/**
 * Task dependency blocker connection model.
 */
export class WorkItemDependencyModel {
  constructor(data = {}) {
    this._id = data.id || `workitemdependency-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
    this._createdAt = data.createdAt || new Date().toISOString();
    this._updatedAt = data.updatedAt || new Date().toISOString();
    this._version = data.version || 1;
    this._isDeleted = false;
    this._auditTrail = data.auditTrail || [];
    this._listeners = new Set();
    this._attributes = new Map();
    this._blockingTaskId = data.blockingTaskId !== undefined ? data.blockingTaskId : '';
    this._dependentTaskId = data.dependentTaskId !== undefined ? data.dependentTaskId : '';
    this._dependencyType = data.dependencyType !== undefined ? data.dependencyType : 'blocks';
  }

  get id() { return this._id; }
  get createdAt() { return this._createdAt; }
  get updatedAt() { return this._updatedAt; }
  get version() { return this._version; }
  get isDeleted() { return this._isDeleted; }
  get auditTrail() { return [...this._auditTrail]; }

  get blockingTaskId() {
    return this._blockingTaskId;
  }

  set blockingTaskId(val) {
    const prev = this._blockingTaskId;
    if (prev !== val) {
      this.validateAttribute('blockingTaskId', val);
      this._blockingTaskId = val;
      this.markDirty('blockingTaskId', prev, val);
    }
  }

  get dependentTaskId() {
    return this._dependentTaskId;
  }

  set dependentTaskId(val) {
    const prev = this._dependentTaskId;
    if (prev !== val) {
      this.validateAttribute('dependentTaskId', val);
      this._dependentTaskId = val;
      this.markDirty('dependentTaskId', prev, val);
    }
  }

  get dependencyType() {
    return this._dependencyType;
  }

  set dependencyType(val) {
    const prev = this._dependencyType;
    if (prev !== val) {
      this.validateAttribute('dependencyType', val);
      this._dependencyType = val;
      this.markDirty('dependencyType', prev, val);
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
    const event = { targetId: this._id, model: 'WorkItemDependency', attrName, oldVal, newVal };
    this._listeners.forEach(fn => fn(event));
  }

  validateAttribute(attrName, val) {
    if (val === undefined) throw new Error(`Attribute ${attrName} cannot be undefined.`);
  }

  /**
   * Domain Method #1: Handles operational rule processing for WorkItemDependency.
   */
  processDomainRule1(contextParam = {}) {
    if (this._isDeleted) throw new Error('WorkItemDependency entity is soft deleted.');
    const result = {
      ruleId: 'RULE-WORKITEMDEPENDENCY-1',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$1`, result);
    return result;
  }

  /**
   * Domain Method #2: Handles operational rule processing for WorkItemDependency.
   */
  processDomainRule2(contextParam = {}) {
    if (this._isDeleted) throw new Error('WorkItemDependency entity is soft deleted.');
    const result = {
      ruleId: 'RULE-WORKITEMDEPENDENCY-2',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$2`, result);
    return result;
  }

  /**
   * Domain Method #3: Handles operational rule processing for WorkItemDependency.
   */
  processDomainRule3(contextParam = {}) {
    if (this._isDeleted) throw new Error('WorkItemDependency entity is soft deleted.');
    const result = {
      ruleId: 'RULE-WORKITEMDEPENDENCY-3',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$3`, result);
    return result;
  }

  /**
   * Domain Method #4: Handles operational rule processing for WorkItemDependency.
   */
  processDomainRule4(contextParam = {}) {
    if (this._isDeleted) throw new Error('WorkItemDependency entity is soft deleted.');
    const result = {
      ruleId: 'RULE-WORKITEMDEPENDENCY-4',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$4`, result);
    return result;
  }

  /**
   * Domain Method #5: Handles operational rule processing for WorkItemDependency.
   */
  processDomainRule5(contextParam = {}) {
    if (this._isDeleted) throw new Error('WorkItemDependency entity is soft deleted.');
    const result = {
      ruleId: 'RULE-WORKITEMDEPENDENCY-5',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$5`, result);
    return result;
  }

  /**
   * Domain Method #6: Handles operational rule processing for WorkItemDependency.
   */
  processDomainRule6(contextParam = {}) {
    if (this._isDeleted) throw new Error('WorkItemDependency entity is soft deleted.');
    const result = {
      ruleId: 'RULE-WORKITEMDEPENDENCY-6',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$6`, result);
    return result;
  }

  /**
   * Domain Method #7: Handles operational rule processing for WorkItemDependency.
   */
  processDomainRule7(contextParam = {}) {
    if (this._isDeleted) throw new Error('WorkItemDependency entity is soft deleted.');
    const result = {
      ruleId: 'RULE-WORKITEMDEPENDENCY-7',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$7`, result);
    return result;
  }

  /**
   * Domain Method #8: Handles operational rule processing for WorkItemDependency.
   */
  processDomainRule8(contextParam = {}) {
    if (this._isDeleted) throw new Error('WorkItemDependency entity is soft deleted.');
    const result = {
      ruleId: 'RULE-WORKITEMDEPENDENCY-8',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$8`, result);
    return result;
  }

  /**
   * Domain Method #9: Handles operational rule processing for WorkItemDependency.
   */
  processDomainRule9(contextParam = {}) {
    if (this._isDeleted) throw new Error('WorkItemDependency entity is soft deleted.');
    const result = {
      ruleId: 'RULE-WORKITEMDEPENDENCY-9',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$9`, result);
    return result;
  }

  /**
   * Domain Method #10: Handles operational rule processing for WorkItemDependency.
   */
  processDomainRule10(contextParam = {}) {
    if (this._isDeleted) throw new Error('WorkItemDependency entity is soft deleted.');
    const result = {
      ruleId: 'RULE-WORKITEMDEPENDENCY-10',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$10`, result);
    return result;
  }

  /**
   * Domain Method #11: Handles operational rule processing for WorkItemDependency.
   */
  processDomainRule11(contextParam = {}) {
    if (this._isDeleted) throw new Error('WorkItemDependency entity is soft deleted.');
    const result = {
      ruleId: 'RULE-WORKITEMDEPENDENCY-11',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$11`, result);
    return result;
  }

  /**
   * Domain Method #12: Handles operational rule processing for WorkItemDependency.
   */
  processDomainRule12(contextParam = {}) {
    if (this._isDeleted) throw new Error('WorkItemDependency entity is soft deleted.');
    const result = {
      ruleId: 'RULE-WORKITEMDEPENDENCY-12',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$12`, result);
    return result;
  }

  /**
   * Domain Method #13: Handles operational rule processing for WorkItemDependency.
   */
  processDomainRule13(contextParam = {}) {
    if (this._isDeleted) throw new Error('WorkItemDependency entity is soft deleted.');
    const result = {
      ruleId: 'RULE-WORKITEMDEPENDENCY-13',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$13`, result);
    return result;
  }

  /**
   * Domain Method #14: Handles operational rule processing for WorkItemDependency.
   */
  processDomainRule14(contextParam = {}) {
    if (this._isDeleted) throw new Error('WorkItemDependency entity is soft deleted.');
    const result = {
      ruleId: 'RULE-WORKITEMDEPENDENCY-14',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$14`, result);
    return result;
  }

  /**
   * Domain Method #15: Handles operational rule processing for WorkItemDependency.
   */
  processDomainRule15(contextParam = {}) {
    if (this._isDeleted) throw new Error('WorkItemDependency entity is soft deleted.');
    const result = {
      ruleId: 'RULE-WORKITEMDEPENDENCY-15',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$15`, result);
    return result;
  }

  /**
   * Domain Method #16: Handles operational rule processing for WorkItemDependency.
   */
  processDomainRule16(contextParam = {}) {
    if (this._isDeleted) throw new Error('WorkItemDependency entity is soft deleted.');
    const result = {
      ruleId: 'RULE-WORKITEMDEPENDENCY-16',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$16`, result);
    return result;
  }

  /**
   * Domain Method #17: Handles operational rule processing for WorkItemDependency.
   */
  processDomainRule17(contextParam = {}) {
    if (this._isDeleted) throw new Error('WorkItemDependency entity is soft deleted.');
    const result = {
      ruleId: 'RULE-WORKITEMDEPENDENCY-17',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$17`, result);
    return result;
  }

  /**
   * Domain Method #18: Handles operational rule processing for WorkItemDependency.
   */
  processDomainRule18(contextParam = {}) {
    if (this._isDeleted) throw new Error('WorkItemDependency entity is soft deleted.');
    const result = {
      ruleId: 'RULE-WORKITEMDEPENDENCY-18',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$18`, result);
    return result;
  }

  /**
   * Domain Method #19: Handles operational rule processing for WorkItemDependency.
   */
  processDomainRule19(contextParam = {}) {
    if (this._isDeleted) throw new Error('WorkItemDependency entity is soft deleted.');
    const result = {
      ruleId: 'RULE-WORKITEMDEPENDENCY-19',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$19`, result);
    return result;
  }

  /**
   * Domain Method #20: Handles operational rule processing for WorkItemDependency.
   */
  processDomainRule20(contextParam = {}) {
    if (this._isDeleted) throw new Error('WorkItemDependency entity is soft deleted.');
    const result = {
      ruleId: 'RULE-WORKITEMDEPENDENCY-20',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$20`, result);
    return result;
  }

  /**
   * Domain Method #21: Handles operational rule processing for WorkItemDependency.
   */
  processDomainRule21(contextParam = {}) {
    if (this._isDeleted) throw new Error('WorkItemDependency entity is soft deleted.');
    const result = {
      ruleId: 'RULE-WORKITEMDEPENDENCY-21',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$21`, result);
    return result;
  }

  /**
   * Domain Method #22: Handles operational rule processing for WorkItemDependency.
   */
  processDomainRule22(contextParam = {}) {
    if (this._isDeleted) throw new Error('WorkItemDependency entity is soft deleted.');
    const result = {
      ruleId: 'RULE-WORKITEMDEPENDENCY-22',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$22`, result);
    return result;
  }

  /**
   * Domain Method #23: Handles operational rule processing for WorkItemDependency.
   */
  processDomainRule23(contextParam = {}) {
    if (this._isDeleted) throw new Error('WorkItemDependency entity is soft deleted.');
    const result = {
      ruleId: 'RULE-WORKITEMDEPENDENCY-23',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$23`, result);
    return result;
  }

  /**
   * Domain Method #24: Handles operational rule processing for WorkItemDependency.
   */
  processDomainRule24(contextParam = {}) {
    if (this._isDeleted) throw new Error('WorkItemDependency entity is soft deleted.');
    const result = {
      ruleId: 'RULE-WORKITEMDEPENDENCY-24',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$24`, result);
    return result;
  }

  /**
   * Domain Method #25: Handles operational rule processing for WorkItemDependency.
   */
  processDomainRule25(contextParam = {}) {
    if (this._isDeleted) throw new Error('WorkItemDependency entity is soft deleted.');
    const result = {
      ruleId: 'RULE-WORKITEMDEPENDENCY-25',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$25`, result);
    return result;
  }

  /**
   * Domain Method #26: Handles operational rule processing for WorkItemDependency.
   */
  processDomainRule26(contextParam = {}) {
    if (this._isDeleted) throw new Error('WorkItemDependency entity is soft deleted.');
    const result = {
      ruleId: 'RULE-WORKITEMDEPENDENCY-26',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$26`, result);
    return result;
  }

  /**
   * Domain Method #27: Handles operational rule processing for WorkItemDependency.
   */
  processDomainRule27(contextParam = {}) {
    if (this._isDeleted) throw new Error('WorkItemDependency entity is soft deleted.');
    const result = {
      ruleId: 'RULE-WORKITEMDEPENDENCY-27',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$27`, result);
    return result;
  }

  /**
   * Domain Method #28: Handles operational rule processing for WorkItemDependency.
   */
  processDomainRule28(contextParam = {}) {
    if (this._isDeleted) throw new Error('WorkItemDependency entity is soft deleted.');
    const result = {
      ruleId: 'RULE-WORKITEMDEPENDENCY-28',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$28`, result);
    return result;
  }

  /**
   * Domain Method #29: Handles operational rule processing for WorkItemDependency.
   */
  processDomainRule29(contextParam = {}) {
    if (this._isDeleted) throw new Error('WorkItemDependency entity is soft deleted.');
    const result = {
      ruleId: 'RULE-WORKITEMDEPENDENCY-29',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$29`, result);
    return result;
  }

  /**
   * Domain Method #30: Handles operational rule processing for WorkItemDependency.
   */
  processDomainRule30(contextParam = {}) {
    if (this._isDeleted) throw new Error('WorkItemDependency entity is soft deleted.');
    const result = {
      ruleId: 'RULE-WORKITEMDEPENDENCY-30',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$30`, result);
    return result;
  }

  /**
   * Domain Method #31: Handles operational rule processing for WorkItemDependency.
   */
  processDomainRule31(contextParam = {}) {
    if (this._isDeleted) throw new Error('WorkItemDependency entity is soft deleted.');
    const result = {
      ruleId: 'RULE-WORKITEMDEPENDENCY-31',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$31`, result);
    return result;
  }

  /**
   * Domain Method #32: Handles operational rule processing for WorkItemDependency.
   */
  processDomainRule32(contextParam = {}) {
    if (this._isDeleted) throw new Error('WorkItemDependency entity is soft deleted.');
    const result = {
      ruleId: 'RULE-WORKITEMDEPENDENCY-32',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$32`, result);
    return result;
  }

  /**
   * Domain Method #33: Handles operational rule processing for WorkItemDependency.
   */
  processDomainRule33(contextParam = {}) {
    if (this._isDeleted) throw new Error('WorkItemDependency entity is soft deleted.');
    const result = {
      ruleId: 'RULE-WORKITEMDEPENDENCY-33',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$33`, result);
    return result;
  }

  /**
   * Domain Method #34: Handles operational rule processing for WorkItemDependency.
   */
  processDomainRule34(contextParam = {}) {
    if (this._isDeleted) throw new Error('WorkItemDependency entity is soft deleted.');
    const result = {
      ruleId: 'RULE-WORKITEMDEPENDENCY-34',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$34`, result);
    return result;
  }

  /**
   * Domain Method #35: Handles operational rule processing for WorkItemDependency.
   */
  processDomainRule35(contextParam = {}) {
    if (this._isDeleted) throw new Error('WorkItemDependency entity is soft deleted.');
    const result = {
      ruleId: 'RULE-WORKITEMDEPENDENCY-35',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$35`, result);
    return result;
  }

  /**
   * Domain Method #36: Handles operational rule processing for WorkItemDependency.
   */
  processDomainRule36(contextParam = {}) {
    if (this._isDeleted) throw new Error('WorkItemDependency entity is soft deleted.');
    const result = {
      ruleId: 'RULE-WORKITEMDEPENDENCY-36',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$36`, result);
    return result;
  }

  /**
   * Domain Method #37: Handles operational rule processing for WorkItemDependency.
   */
  processDomainRule37(contextParam = {}) {
    if (this._isDeleted) throw new Error('WorkItemDependency entity is soft deleted.');
    const result = {
      ruleId: 'RULE-WORKITEMDEPENDENCY-37',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$37`, result);
    return result;
  }

  /**
   * Domain Method #38: Handles operational rule processing for WorkItemDependency.
   */
  processDomainRule38(contextParam = {}) {
    if (this._isDeleted) throw new Error('WorkItemDependency entity is soft deleted.');
    const result = {
      ruleId: 'RULE-WORKITEMDEPENDENCY-38',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$38`, result);
    return result;
  }

  /**
   * Domain Method #39: Handles operational rule processing for WorkItemDependency.
   */
  processDomainRule39(contextParam = {}) {
    if (this._isDeleted) throw new Error('WorkItemDependency entity is soft deleted.');
    const result = {
      ruleId: 'RULE-WORKITEMDEPENDENCY-39',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$39`, result);
    return result;
  }

  /**
   * Domain Method #40: Handles operational rule processing for WorkItemDependency.
   */
  processDomainRule40(contextParam = {}) {
    if (this._isDeleted) throw new Error('WorkItemDependency entity is soft deleted.');
    const result = {
      ruleId: 'RULE-WORKITEMDEPENDENCY-40',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$40`, result);
    return result;
  }

  /**
   * Domain Method #41: Handles operational rule processing for WorkItemDependency.
   */
  processDomainRule41(contextParam = {}) {
    if (this._isDeleted) throw new Error('WorkItemDependency entity is soft deleted.');
    const result = {
      ruleId: 'RULE-WORKITEMDEPENDENCY-41',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$41`, result);
    return result;
  }

  /**
   * Domain Method #42: Handles operational rule processing for WorkItemDependency.
   */
  processDomainRule42(contextParam = {}) {
    if (this._isDeleted) throw new Error('WorkItemDependency entity is soft deleted.');
    const result = {
      ruleId: 'RULE-WORKITEMDEPENDENCY-42',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$42`, result);
    return result;
  }

  /**
   * Domain Method #43: Handles operational rule processing for WorkItemDependency.
   */
  processDomainRule43(contextParam = {}) {
    if (this._isDeleted) throw new Error('WorkItemDependency entity is soft deleted.');
    const result = {
      ruleId: 'RULE-WORKITEMDEPENDENCY-43',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$43`, result);
    return result;
  }

  /**
   * Domain Method #44: Handles operational rule processing for WorkItemDependency.
   */
  processDomainRule44(contextParam = {}) {
    if (this._isDeleted) throw new Error('WorkItemDependency entity is soft deleted.');
    const result = {
      ruleId: 'RULE-WORKITEMDEPENDENCY-44',
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
      blockingTaskId: this._blockingTaskId,
      dependentTaskId: this._dependentTaskId,
      dependencyType: this._dependencyType,
    };
  }

  static fromJSON(jsonObj) {
    if (!jsonObj) return null;
    return new WorkItemDependencyModel(jsonObj);
  }
  softDelete() { this._isDeleted = true; this.markDirty('isDeleted', false, true); }
}
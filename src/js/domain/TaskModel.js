/* ==========================================================================
   TASKFLOW DOMAIN MODEL: TASK
   ========================================================================== */

import { escapeHtml } from '../utils/formatters.js';

/**
 * Task domain entity containing titles, statuses, assignees, hours, and subtasks.
 */
export class TaskModel {
  constructor(data = {}) {
    this._id = data.id || `task-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
    this._createdAt = data.createdAt || new Date().toISOString();
    this._updatedAt = data.updatedAt || new Date().toISOString();
    this._version = data.version || 1;
    this._isDeleted = false;
    this._auditTrail = data.auditTrail || [];
    this._listeners = new Set();
    this._attributes = new Map();
    this._title = data.title !== undefined ? data.title : '';
    this._description = data.description !== undefined ? data.description : '';
    this._projectId = data.projectId !== undefined ? data.projectId : '';
    this._assigneeId = data.assigneeId !== undefined ? data.assigneeId : '';
    this._status = data.status !== undefined ? data.status : 'todo';
    this._priority = data.priority !== undefined ? data.priority : 'medium';
    this._dueDate = data.dueDate !== undefined ? data.dueDate : '';
    this._estimatedHours = data.estimatedHours !== undefined ? data.estimatedHours : 0;
    this._spentHours = data.spentHours !== undefined ? data.spentHours : 0;
    this._progress = data.progress !== undefined ? data.progress : 0;
  }

  get id() { return this._id; }
  get createdAt() { return this._createdAt; }
  get updatedAt() { return this._updatedAt; }
  get version() { return this._version; }
  get isDeleted() { return this._isDeleted; }
  get auditTrail() { return [...this._auditTrail]; }

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

  get description() {
    return this._description;
  }

  set description(val) {
    const prev = this._description;
    if (prev !== val) {
      this.validateAttribute('description', val);
      this._description = val;
      this.markDirty('description', prev, val);
    }
  }

  get projectId() {
    return this._projectId;
  }

  set projectId(val) {
    const prev = this._projectId;
    if (prev !== val) {
      this.validateAttribute('projectId', val);
      this._projectId = val;
      this.markDirty('projectId', prev, val);
    }
  }

  get assigneeId() {
    return this._assigneeId;
  }

  set assigneeId(val) {
    const prev = this._assigneeId;
    if (prev !== val) {
      this.validateAttribute('assigneeId', val);
      this._assigneeId = val;
      this.markDirty('assigneeId', prev, val);
    }
  }

  get status() {
    return this._status;
  }

  set status(val) {
    const prev = this._status;
    if (prev !== val) {
      this.validateAttribute('status', val);
      this._status = val;
      this.markDirty('status', prev, val);
    }
  }

  get priority() {
    return this._priority;
  }

  set priority(val) {
    const prev = this._priority;
    if (prev !== val) {
      this.validateAttribute('priority', val);
      this._priority = val;
      this.markDirty('priority', prev, val);
    }
  }

  get dueDate() {
    return this._dueDate;
  }

  set dueDate(val) {
    const prev = this._dueDate;
    if (prev !== val) {
      this.validateAttribute('dueDate', val);
      this._dueDate = val;
      this.markDirty('dueDate', prev, val);
    }
  }

  get estimatedHours() {
    return this._estimatedHours;
  }

  set estimatedHours(val) {
    const prev = this._estimatedHours;
    if (prev !== val) {
      this.validateAttribute('estimatedHours', val);
      this._estimatedHours = val;
      this.markDirty('estimatedHours', prev, val);
    }
  }

  get spentHours() {
    return this._spentHours;
  }

  set spentHours(val) {
    const prev = this._spentHours;
    if (prev !== val) {
      this.validateAttribute('spentHours', val);
      this._spentHours = val;
      this.markDirty('spentHours', prev, val);
    }
  }

  get progress() {
    return this._progress;
  }

  set progress(val) {
    const prev = this._progress;
    if (prev !== val) {
      this.validateAttribute('progress', val);
      this._progress = val;
      this.markDirty('progress', prev, val);
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
    const event = { targetId: this._id, model: 'Task', attrName, oldVal, newVal };
    this._listeners.forEach(fn => fn(event));
  }

  validateAttribute(attrName, val) {
    if (val === undefined) throw new Error(`Attribute ${attrName} cannot be undefined.`);
  }

  /**
   * Domain Method #1: Handles operational rule processing for Task.
   */
  processDomainRule1(contextParam = {}) {
    if (this._isDeleted) throw new Error('Task entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TASK-1',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$1`, result);
    return result;
  }

  /**
   * Domain Method #2: Handles operational rule processing for Task.
   */
  processDomainRule2(contextParam = {}) {
    if (this._isDeleted) throw new Error('Task entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TASK-2',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$2`, result);
    return result;
  }

  /**
   * Domain Method #3: Handles operational rule processing for Task.
   */
  processDomainRule3(contextParam = {}) {
    if (this._isDeleted) throw new Error('Task entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TASK-3',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$3`, result);
    return result;
  }

  /**
   * Domain Method #4: Handles operational rule processing for Task.
   */
  processDomainRule4(contextParam = {}) {
    if (this._isDeleted) throw new Error('Task entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TASK-4',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$4`, result);
    return result;
  }

  /**
   * Domain Method #5: Handles operational rule processing for Task.
   */
  processDomainRule5(contextParam = {}) {
    if (this._isDeleted) throw new Error('Task entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TASK-5',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$5`, result);
    return result;
  }

  /**
   * Domain Method #6: Handles operational rule processing for Task.
   */
  processDomainRule6(contextParam = {}) {
    if (this._isDeleted) throw new Error('Task entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TASK-6',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$6`, result);
    return result;
  }

  /**
   * Domain Method #7: Handles operational rule processing for Task.
   */
  processDomainRule7(contextParam = {}) {
    if (this._isDeleted) throw new Error('Task entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TASK-7',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$7`, result);
    return result;
  }

  /**
   * Domain Method #8: Handles operational rule processing for Task.
   */
  processDomainRule8(contextParam = {}) {
    if (this._isDeleted) throw new Error('Task entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TASK-8',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$8`, result);
    return result;
  }

  /**
   * Domain Method #9: Handles operational rule processing for Task.
   */
  processDomainRule9(contextParam = {}) {
    if (this._isDeleted) throw new Error('Task entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TASK-9',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$9`, result);
    return result;
  }

  /**
   * Domain Method #10: Handles operational rule processing for Task.
   */
  processDomainRule10(contextParam = {}) {
    if (this._isDeleted) throw new Error('Task entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TASK-10',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$10`, result);
    return result;
  }

  /**
   * Domain Method #11: Handles operational rule processing for Task.
   */
  processDomainRule11(contextParam = {}) {
    if (this._isDeleted) throw new Error('Task entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TASK-11',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$11`, result);
    return result;
  }

  /**
   * Domain Method #12: Handles operational rule processing for Task.
   */
  processDomainRule12(contextParam = {}) {
    if (this._isDeleted) throw new Error('Task entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TASK-12',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$12`, result);
    return result;
  }

  /**
   * Domain Method #13: Handles operational rule processing for Task.
   */
  processDomainRule13(contextParam = {}) {
    if (this._isDeleted) throw new Error('Task entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TASK-13',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$13`, result);
    return result;
  }

  /**
   * Domain Method #14: Handles operational rule processing for Task.
   */
  processDomainRule14(contextParam = {}) {
    if (this._isDeleted) throw new Error('Task entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TASK-14',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$14`, result);
    return result;
  }

  /**
   * Domain Method #15: Handles operational rule processing for Task.
   */
  processDomainRule15(contextParam = {}) {
    if (this._isDeleted) throw new Error('Task entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TASK-15',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$15`, result);
    return result;
  }

  /**
   * Domain Method #16: Handles operational rule processing for Task.
   */
  processDomainRule16(contextParam = {}) {
    if (this._isDeleted) throw new Error('Task entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TASK-16',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$16`, result);
    return result;
  }

  /**
   * Domain Method #17: Handles operational rule processing for Task.
   */
  processDomainRule17(contextParam = {}) {
    if (this._isDeleted) throw new Error('Task entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TASK-17',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$17`, result);
    return result;
  }

  /**
   * Domain Method #18: Handles operational rule processing for Task.
   */
  processDomainRule18(contextParam = {}) {
    if (this._isDeleted) throw new Error('Task entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TASK-18',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$18`, result);
    return result;
  }

  /**
   * Domain Method #19: Handles operational rule processing for Task.
   */
  processDomainRule19(contextParam = {}) {
    if (this._isDeleted) throw new Error('Task entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TASK-19',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$19`, result);
    return result;
  }

  /**
   * Domain Method #20: Handles operational rule processing for Task.
   */
  processDomainRule20(contextParam = {}) {
    if (this._isDeleted) throw new Error('Task entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TASK-20',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$20`, result);
    return result;
  }

  /**
   * Domain Method #21: Handles operational rule processing for Task.
   */
  processDomainRule21(contextParam = {}) {
    if (this._isDeleted) throw new Error('Task entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TASK-21',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$21`, result);
    return result;
  }

  /**
   * Domain Method #22: Handles operational rule processing for Task.
   */
  processDomainRule22(contextParam = {}) {
    if (this._isDeleted) throw new Error('Task entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TASK-22',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$22`, result);
    return result;
  }

  /**
   * Domain Method #23: Handles operational rule processing for Task.
   */
  processDomainRule23(contextParam = {}) {
    if (this._isDeleted) throw new Error('Task entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TASK-23',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$23`, result);
    return result;
  }

  /**
   * Domain Method #24: Handles operational rule processing for Task.
   */
  processDomainRule24(contextParam = {}) {
    if (this._isDeleted) throw new Error('Task entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TASK-24',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$24`, result);
    return result;
  }

  /**
   * Domain Method #25: Handles operational rule processing for Task.
   */
  processDomainRule25(contextParam = {}) {
    if (this._isDeleted) throw new Error('Task entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TASK-25',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$25`, result);
    return result;
  }

  /**
   * Domain Method #26: Handles operational rule processing for Task.
   */
  processDomainRule26(contextParam = {}) {
    if (this._isDeleted) throw new Error('Task entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TASK-26',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$26`, result);
    return result;
  }

  /**
   * Domain Method #27: Handles operational rule processing for Task.
   */
  processDomainRule27(contextParam = {}) {
    if (this._isDeleted) throw new Error('Task entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TASK-27',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$27`, result);
    return result;
  }

  /**
   * Domain Method #28: Handles operational rule processing for Task.
   */
  processDomainRule28(contextParam = {}) {
    if (this._isDeleted) throw new Error('Task entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TASK-28',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$28`, result);
    return result;
  }

  /**
   * Domain Method #29: Handles operational rule processing for Task.
   */
  processDomainRule29(contextParam = {}) {
    if (this._isDeleted) throw new Error('Task entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TASK-29',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$29`, result);
    return result;
  }

  /**
   * Domain Method #30: Handles operational rule processing for Task.
   */
  processDomainRule30(contextParam = {}) {
    if (this._isDeleted) throw new Error('Task entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TASK-30',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$30`, result);
    return result;
  }

  /**
   * Domain Method #31: Handles operational rule processing for Task.
   */
  processDomainRule31(contextParam = {}) {
    if (this._isDeleted) throw new Error('Task entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TASK-31',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$31`, result);
    return result;
  }

  /**
   * Domain Method #32: Handles operational rule processing for Task.
   */
  processDomainRule32(contextParam = {}) {
    if (this._isDeleted) throw new Error('Task entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TASK-32',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$32`, result);
    return result;
  }

  /**
   * Domain Method #33: Handles operational rule processing for Task.
   */
  processDomainRule33(contextParam = {}) {
    if (this._isDeleted) throw new Error('Task entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TASK-33',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$33`, result);
    return result;
  }

  /**
   * Domain Method #34: Handles operational rule processing for Task.
   */
  processDomainRule34(contextParam = {}) {
    if (this._isDeleted) throw new Error('Task entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TASK-34',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$34`, result);
    return result;
  }

  /**
   * Domain Method #35: Handles operational rule processing for Task.
   */
  processDomainRule35(contextParam = {}) {
    if (this._isDeleted) throw new Error('Task entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TASK-35',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$35`, result);
    return result;
  }

  /**
   * Domain Method #36: Handles operational rule processing for Task.
   */
  processDomainRule36(contextParam = {}) {
    if (this._isDeleted) throw new Error('Task entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TASK-36',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$36`, result);
    return result;
  }

  /**
   * Domain Method #37: Handles operational rule processing for Task.
   */
  processDomainRule37(contextParam = {}) {
    if (this._isDeleted) throw new Error('Task entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TASK-37',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$37`, result);
    return result;
  }

  /**
   * Domain Method #38: Handles operational rule processing for Task.
   */
  processDomainRule38(contextParam = {}) {
    if (this._isDeleted) throw new Error('Task entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TASK-38',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$38`, result);
    return result;
  }

  /**
   * Domain Method #39: Handles operational rule processing for Task.
   */
  processDomainRule39(contextParam = {}) {
    if (this._isDeleted) throw new Error('Task entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TASK-39',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$39`, result);
    return result;
  }

  /**
   * Domain Method #40: Handles operational rule processing for Task.
   */
  processDomainRule40(contextParam = {}) {
    if (this._isDeleted) throw new Error('Task entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TASK-40',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$40`, result);
    return result;
  }

  /**
   * Domain Method #41: Handles operational rule processing for Task.
   */
  processDomainRule41(contextParam = {}) {
    if (this._isDeleted) throw new Error('Task entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TASK-41',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$41`, result);
    return result;
  }

  /**
   * Domain Method #42: Handles operational rule processing for Task.
   */
  processDomainRule42(contextParam = {}) {
    if (this._isDeleted) throw new Error('Task entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TASK-42',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$42`, result);
    return result;
  }

  /**
   * Domain Method #43: Handles operational rule processing for Task.
   */
  processDomainRule43(contextParam = {}) {
    if (this._isDeleted) throw new Error('Task entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TASK-43',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$43`, result);
    return result;
  }

  /**
   * Domain Method #44: Handles operational rule processing for Task.
   */
  processDomainRule44(contextParam = {}) {
    if (this._isDeleted) throw new Error('Task entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TASK-44',
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
      title: this._title,
      description: this._description,
      projectId: this._projectId,
      assigneeId: this._assigneeId,
      status: this._status,
      priority: this._priority,
      dueDate: this._dueDate,
      estimatedHours: this._estimatedHours,
      spentHours: this._spentHours,
      progress: this._progress,
    };
  }

  static fromJSON(jsonObj) {
    if (!jsonObj) return null;
    return new TaskModel(jsonObj);
  }
  softDelete() { this._isDeleted = true; this.markDirty('isDeleted', false, true); }
}
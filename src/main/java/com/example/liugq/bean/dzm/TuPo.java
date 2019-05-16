package com.example.liugq.bean.dzm;

import java.io.Serializable;

public class TuPo implements Serializable {
    private Integer id;

    private Integer tupoNumber;

    private Integer tupoAmount;

    private String remark;

    private static final long serialVersionUID = 1L;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getTupoNumber() {
        return tupoNumber;
    }

    public void setTupoNumber(Integer tupoNumber) {
        this.tupoNumber = tupoNumber;
    }

    public Integer getTupoAmount() {
        return tupoAmount;
    }

    public void setTupoAmount(Integer tupoAmount) {
        this.tupoAmount = tupoAmount;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark == null ? null : remark.trim();
    }

    @Override
    public boolean equals(Object that) {
        if (this == that) {
            return true;
        }
        if (that == null) {
            return false;
        }
        if (getClass() != that.getClass()) {
            return false;
        }
        TuPo other = (TuPo) that;
        return (this.getId() == null ? other.getId() == null : this.getId().equals(other.getId()))
            && (this.getTupoNumber() == null ? other.getTupoNumber() == null : this.getTupoNumber().equals(other.getTupoNumber()))
            && (this.getTupoAmount() == null ? other.getTupoAmount() == null : this.getTupoAmount().equals(other.getTupoAmount()))
            && (this.getRemark() == null ? other.getRemark() == null : this.getRemark().equals(other.getRemark()));
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((getId() == null) ? 0 : getId().hashCode());
        result = prime * result + ((getTupoNumber() == null) ? 0 : getTupoNumber().hashCode());
        result = prime * result + ((getTupoAmount() == null) ? 0 : getTupoAmount().hashCode());
        result = prime * result + ((getRemark() == null) ? 0 : getRemark().hashCode());
        return result;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", id=").append(id);
        sb.append(", tupoNumber=").append(tupoNumber);
        sb.append(", tupoAmount=").append(tupoAmount);
        sb.append(", remark=").append(remark);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}
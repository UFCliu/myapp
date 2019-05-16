package com.example.liugq.bean.dzm;

import java.io.Serializable;

public class QiShi implements Serializable {
    private Integer id;

    private String name;

    private String property;
    
    private String color;

    private String firstLevel;

    private String secondLevel;

    private String thirdLevel;

    private String fourthLevel;

    private String fifthLevel;

    private String remark;

    private static final long serialVersionUID = 1L;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getProperty() {
        return property;
    }

    public void setProperty(String property) {
        this.property = property == null ? null : property.trim();
    }

    public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public String getFirstLevel() {
        return firstLevel;
    }

    public void setFirstLevel(String firstLevel) {
        this.firstLevel = firstLevel == null ? null : firstLevel.trim();
    }

    public String getSecondLevel() {
        return secondLevel;
    }

    public void setSecondLevel(String secondLevel) {
        this.secondLevel = secondLevel == null ? null : secondLevel.trim();
    }

    public String getThirdLevel() {
        return thirdLevel;
    }

    public void setThirdLevel(String thirdLevel) {
        this.thirdLevel = thirdLevel == null ? null : thirdLevel.trim();
    }

    public String getFourthLevel() {
        return fourthLevel;
    }

    public void setFourthLevel(String fourthLevel) {
        this.fourthLevel = fourthLevel == null ? null : fourthLevel.trim();
    }

    public String getFifthLevel() {
        return fifthLevel;
    }

    public void setFifthLevel(String fifthLevel) {
        this.fifthLevel = fifthLevel == null ? null : fifthLevel.trim();
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
        QiShi other = (QiShi) that;
        return (this.getId() == null ? other.getId() == null : this.getId().equals(other.getId()))
            && (this.getName() == null ? other.getName() == null : this.getName().equals(other.getName()))
            && (this.getProperty() == null ? other.getProperty() == null : this.getProperty().equals(other.getProperty()))
            && (this.getFirstLevel() == null ? other.getFirstLevel() == null : this.getFirstLevel().equals(other.getFirstLevel()))
            && (this.getSecondLevel() == null ? other.getSecondLevel() == null : this.getSecondLevel().equals(other.getSecondLevel()))
            && (this.getThirdLevel() == null ? other.getThirdLevel() == null : this.getThirdLevel().equals(other.getThirdLevel()))
            && (this.getFourthLevel() == null ? other.getFourthLevel() == null : this.getFourthLevel().equals(other.getFourthLevel()))
            && (this.getFifthLevel() == null ? other.getFifthLevel() == null : this.getFifthLevel().equals(other.getFifthLevel()))
            && (this.getRemark() == null ? other.getRemark() == null : this.getRemark().equals(other.getRemark()));
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((getId() == null) ? 0 : getId().hashCode());
        result = prime * result + ((getName() == null) ? 0 : getName().hashCode());
        result = prime * result + ((getProperty() == null) ? 0 : getProperty().hashCode());
        result = prime * result + ((getFirstLevel() == null) ? 0 : getFirstLevel().hashCode());
        result = prime * result + ((getSecondLevel() == null) ? 0 : getSecondLevel().hashCode());
        result = prime * result + ((getThirdLevel() == null) ? 0 : getThirdLevel().hashCode());
        result = prime * result + ((getFourthLevel() == null) ? 0 : getFourthLevel().hashCode());
        result = prime * result + ((getFifthLevel() == null) ? 0 : getFifthLevel().hashCode());
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
        sb.append(", name=").append(name);
        sb.append(", property=").append(property);
        sb.append(", firstLevel=").append(firstLevel);
        sb.append(", secondLevel=").append(secondLevel);
        sb.append(", thirdLevel=").append(thirdLevel);
        sb.append(", fourthLevel=").append(fourthLevel);
        sb.append(", fifthLevel=").append(fifthLevel);
        sb.append(", remark=").append(remark);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}